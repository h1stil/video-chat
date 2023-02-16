import socketIOClient from "socket.io-client";

export const serverURI = "localhost";
export const portData = "5000";
// export const WS = "http://localhost:3001";
const WS = process.env.REACT_APP_WS as string;

export const ws = socketIOClient("http://localhost:3000");

export interface IRegForm {
  email: string;
  password: string;
  confirm: string;
  nick: string;
}

export interface ILogForm {
  username: string;
  password: string;
}

export interface IPeer {
  userName: string;
  peerId: string;
}
