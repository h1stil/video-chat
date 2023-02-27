import socketIOClient from "socket.io-client";

const WS = process.env.REACT_APP_WS as string;

export const ws = socketIOClient(WS);

export interface IRegForm {
  email: string;
  password: string;
  confirm: string;
  nick: string;
}

export interface ILogForm {
  email: string;
  password: string;
}

export interface IPeer {
  userName: string;
  peerId: string;
}
