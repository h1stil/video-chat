import { createContext } from "react";
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
  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
};
