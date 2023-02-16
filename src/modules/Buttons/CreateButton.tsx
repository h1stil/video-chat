import React from "react";
import { ws } from "../../values/globalValues";

export const CreateButton: React.FC = () => {
  const createRoom = () => {
    ws.emit("create-room");
  };
  return <button onClick={createRoom}>Start new meeting</button>;
};
