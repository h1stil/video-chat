import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { ws } from "../../values/globalValues";

export const CreateButton: React.FC = () => {
  const createRoom = () => {
    ws.emit("create-room");
  };
  return <button onClick={createRoom}>Start new meeting</button>;
};
