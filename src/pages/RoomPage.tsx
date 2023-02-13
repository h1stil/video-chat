import React, { useContext, useEffect } from "react";
import "./video.css";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPleer } from "../modules/VideoPleer";
import { PeerState } from "../context/peerReducer";
import { ShareScreenButton } from "../modules/Buttons/ShareScreenButton";

const RoomPage = () => {
  const { id } = useParams();
  const { ws, me, stream, peers, shareScreen, screenSharedId, setRoomId } =
    useContext(RoomContext);

  useEffect(() => {
    setRoomId(id);
  }, [id, setRoomId]);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  const screenSharingVideo =
    screenSharedId === me?.id ? stream : peers[screenSharedId]?.stream;

  const { [screenSharedId]: sharing, ...peersToShow } = peers;
  return (
    <div>
      <h1>{`Chat Room id ${id}`}</h1>
      <div>
        {screenSharingVideo && (
          <div style={{ width: "80%", height: "60%" }}>
            <VideoPleer stream={screenSharingVideo} />
          </div>
        )}
      </div>
      <div style={screenSharingVideo ? { height: "20%" } : { height: "80%" }}>
        <VideoPleer stream={stream} />
        {Object.values(peersToShow as PeerState).map((peer) => (
          <VideoPleer stream={peer.stream} />
        ))}
      </div>
      <ShareScreenButton onClick={shareScreen} />
    </div>
  );
};

export default RoomPage;
