import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

export const JoinButton: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const joinRoom = () => {
    ws.emit("join-room");
  };
  return <button onClick={joinRoom}>Start new meeting</button>;
};
