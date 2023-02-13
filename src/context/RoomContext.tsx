import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

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

  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    navigate(`/room/${roomId}`);
    console.log(roomId);
  };
  useEffect(() => {
    ws.on("room-created", enterRoom);
  }, []);
  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
};
