import React, { useContext, useEffect } from "react";
import "./video.css";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

const RoomPage = () => {
  const { id } = useParams();
  const { ws } = useContext(RoomContext);

  useEffect(() => {
    ws.emit("join-room", { roomId: id });
  }, [id]);

  return (
    <div>
      <h1>{`Chat Room id ${id}`}</h1>
    </div>
  );
};

export default RoomPage;
