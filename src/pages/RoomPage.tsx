import React, { useContext, useEffect } from "react";
import "./video.css";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPleer } from "../modules/VideoPleer";
import { PeerState } from "../context/peerReducer";

const RoomPage = () => {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  return (
    <div>
      <h1>{`Chat Room id ${id}`}</h1>
      <VideoPleer stream={stream} />

      {Object.values(peers as PeerState).map((peer) => (
        <VideoPleer stream={peer.stream} />
      ))}
    </div>
  );
};

export default RoomPage;
