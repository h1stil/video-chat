/* eslint-disable @typescript-eslint/no-empty-function */
import Peer from "peerjs";
import { createContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidV4 } from "uuid";
import { PeerState, peersReducer } from "./reducers/peerReducer";
import {
  addPeerStreamAction,
  removePeerStreamAction,
  addPeerNameAction,
  addAllPeersAction,
} from "./reducers/peerActions";
import { Message } from "../modules/chat/Chat";
import { ChatState, chatReducer } from "./reducers/chatReducer";
import {
  addHistoryAction,
  addMessageAction,
  toggleChatAction,
} from "./reducers/chatActions";
import { IPeer, ws } from "../globalValues";

interface RoomValue {
  stream?: MediaStream;
  screenStream?: MediaStream;
  peers: PeerState;
  shareScreen: () => void;
  roomId: string;
  setRoomId: (id: string) => void;
  chat: ChatState;
  sendMessage: (message: string, roomId: string, author: string) => void;
  toggleChat: () => void;
  userId: string;
  userName: string;
  setUserName: (userName: string) => void;
  screenSharedId: string;
}

export const RoomContext = createContext<RoomValue>({
  peers: {},
  shareScreen: () => {},
  setRoomId: (id) => {},
  screenSharedId: "",
  roomId: "",
  chat: {
    messages: [],
    isChatOpen: false,
  },
  sendMessage: (message: string, roomId: string, author: string) => {},
  toggleChat: () => {},
  userId: "",
  userName: "",
  setUserName: (userName) => {},
});

interface Props {
  children: React.ReactNode;
}

export const RoomProvider: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  const navigate = useNavigate();

  const [peers, dispatch] = useReducer(peersReducer, {});
  const [chat, chatDispatch] = useReducer(chatReducer, {
    messages: [],
    isChatOpen: false,
  });

  const [me, setMe] = useState<Peer>();
  const [stream, setStream] = useState<MediaStream>();
  const [screenSharedId, setScreenSharedId] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [userName, setUserName] = useState<string>(
    localStorage.getItem("name") || "ИМЯ"
  );
  const [userId] = useState(localStorage.getItem("userId") || uuidV4());

  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    navigate(`/room/${roomId}`);
  };

  const getUsers = ({ members }: { members: Record<string, IPeer> }) => {
    dispatch(addAllPeersAction(members));
    console.log(members);
  };

  const removePeer = (peerId: string) => {
    dispatch(removePeerStreamAction(peerId));
  };

  const switchStream = (stream: MediaStream) => {
    setStream(stream);
    if (me) setScreenSharedId(me.id);

    Object.values(me?.connections).forEach((connection: any) => {
      const track = stream?.getTracks().find((track) => track.kind === "video");
      connection[0].peerConnection
        .getSenders()[1]
        .replaceTrack(track)
        .catch((err: unknown) => console.error(err));
    });
  };

  const shareScreen = () => {
    if (screenSharedId) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          switchStream(stream);
          setScreenSharedId("");
        });
    } else {
      navigator.mediaDevices.getDisplayMedia({}).then(switchStream);
    }
  };

  const sendMessage = (message: string, roomId: string, author: string) => {
    const messageData: Message = {
      content: message,
      timestamp: new Date().getTime(),
      author,
    };
    chatDispatch(addMessageAction(messageData));

    ws.emit("send-message", roomId, messageData);
  };

  const addMessage = (message: Message) => {
    console.log(message);
    chatDispatch(addMessageAction(message));
  };

  const addHistory = (messages: Message[]) => {
    chatDispatch(addHistoryAction(messages));
  };

  const toggleChat = () => {
    chatDispatch(toggleChatAction(!chat.isChatOpen));
  };

  useEffect(() => {
    // const userId = localStorage.getItem("id");
    // const meId = userId || uuidV4();
    // localStorage.setItem("id", userId);
    const peer = new Peer(userId);
    setMe(peer);

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((myStream) => {
          setStream(myStream);
        });
    } catch (error) {
      console.error(error);
    }

    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
    ws.on("user-disconnected", removePeer);
    ws.on("user-started-sharing", (peerId) => setScreenSharedId(peerId));
    ws.on("user-stopped-sharing", () => setScreenSharedId(""));
    ws.on("add-message", addMessage);
    ws.on("get-messages", addHistory);

    return () => {
      ws.off("room-created");
      ws.off("get-users");
      ws.off("user-disconnected");
      ws.off("user-started-sharing");
      ws.off("user-stopped-sharing");
      ws.off("user-joined");
      ws.off("add-message");
      ws.off("get-messages");
      me?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (screenSharedId) {
      ws.emit("start-sharing", { peerId: screenSharedId, roomId });
    } else {
      ws.emit("stop-sharing");
    }
  }, [screenSharedId]);

  useEffect(() => {
    if (!me || !stream) return;

    ws.on("user-joined", ({ peerId, userName: name }) => {
      console.log(name, "name");
      console.log(userName, "userName");
      dispatch(addPeerNameAction(peerId, name));

      const call = me.call(peerId, stream, {
        metadata: {
          userName,
        },
      });
      call.on("stream", (peerStream) => {
        dispatch(addPeerStreamAction(peerId, peerStream));
      });
    });

    me.on("call", (call) => {
      const { userName } = call.metadata;
      dispatch(addPeerNameAction(call.peer, userName));
      call.answer(stream);
      call.on("stream", (peerStream) => {
        dispatch(addPeerStreamAction(call.peer, peerStream));
      });
    });
  }, [me, stream, userName]);

  console.log({ peers });

  return (
    <RoomContext.Provider
      value={{
        stream,
        peers,
        chat,
        toggleChat,
        shareScreen,
        screenSharedId,
        roomId,
        setRoomId,
        sendMessage,
        userName,
        setUserName,
        userId,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
