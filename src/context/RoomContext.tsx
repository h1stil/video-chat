import Peer from "peerjs";
import { createContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { v4 as uuidV4 } from "uuid";
import { peersReducer } from "./reducers/peerReducer";
import { addPeerAction, removePeerAction } from "./reducers/peerActions";
import { Message } from "../modules/chat/Chat";
import { chatReducer } from "./reducers/chatReducer";
import {
  addHistoryAction,
  addMessageAction,
  toggleChatAction,
} from "./reducers/chatActions";

const WS = "http://localhost:3001";

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WS);

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

  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    navigate(`/room/${roomId}`);
    console.log(roomId);
  };

  const getUsers = ({ members }: { members: string[] }) => {
    console.log(members);
  };

  const removePeer = (peerId: string) => {
    dispatch(removePeerAction(peerId));
  };

  const switchStream = (stream: MediaStream) => {
    setStream(stream);
    if (me) setScreenSharedId(me.id);

    Object.values(me?.connections).forEach((connection: any) => {
      const track = stream?.getTracks().find((track) => track.kind === "video");
      connection[0].peerConnection
        .getSenders()[1]
        .replaceTrack(track)
        .catch((err: any) => console.error(err));
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

  const sendMessage = (message: string) => {
    const messageData: Message = {
      content: message,
      timestamp: new Date().getTime(),
      author: me?.id,
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
    const meId = uuidV4();
    const peer = new Peer(meId);
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

    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);
      call.on("stream", (peerStream) => {
        dispatch(addPeerAction(peerId, peerStream));
      });
    });

    me.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (peerStream) => {
        dispatch(addPeerAction(call.peer, peerStream));
      });
    });
  }, [me, stream]);

  console.log({ peers });

  return (
    <RoomContext.Provider
      value={{
        ws,
        me,
        stream,
        peers,
        chat,
        addMessage,
        toggleChat,
        shareScreen,
        screenSharedId,
        setRoomId,
        sendMessage,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
