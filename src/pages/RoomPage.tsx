import React, { useContext, useEffect } from "react";
import "./video.css";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPleer } from "../modules/VideoPleer";
import { PeerState } from "../context/reducers/peerReducer";
import { ShareScreenButton } from "../modules/Buttons/ShareScreenButton";
import { ChatButton } from "../modules/Buttons/ChatButton";
import { Chat } from "../modules/chat/Chat";
import { ws } from "../globalValues";

const RoomPage = () => {
  const { id } = useParams();
  const {
    stream,
    peers,
    chat,
    toggleChat,
    shareScreen,
    screenSharedId,
    setRoomId,
    userName,
    userId,
  } = useContext(RoomContext);

  useEffect(() => {
    if (id) setRoomId(id);
  }, [id, setRoomId]);

  useEffect(() => {
    if (userId && stream)
      ws.emit("join-room", { roomId: id, peerId: userId, userName });
  }, [id, userId, ws, stream]);

  const screenSharingVideo =
    screenSharedId === userId ? stream : peers[screenSharedId]?.stream;

  const { [screenSharedId]: sharing, ...peersToShow } = peers;
  return (
    <main className="video__main">
      <section className="video__frames">
        <div className="video__container container">
          <h1 className="page__title">{`Chat Room id: "${id}"`}</h1>
          <ul className="video__list">
            {screenSharingVideo && (
              <li className="video__shared" key={stream?.id + "ufc"}>
                <VideoPleer stream={screenSharingVideo} />
                <p>{userId}</p>
              </li>
            )}

            {/* style={screenSharingVideo ? { height: "20%" } : { height: "80%" }} */}

            {screenSharedId !== userId && (
              <li className="video__item" key={-1}>
                {stream && <VideoPleer stream={stream} />}
                <p>{userId}</p>
              </li>
            )}
            {Object.values(peersToShow as PeerState)
              .filter((peer) => !!peer.stream)
              .map((peer) => (
                <li className="video__item" key={peer.peerId}>
                  {peer.stream && <VideoPleer stream={peer.stream} />}
                  <p>{peer.userName}</p>
                </li>
              ))}
          </ul>
          {chat.isChatOpen && (
            <div>
              <Chat />
            </div>
          )}

          <ShareScreenButton onClick={shareScreen} />
          <ChatButton onClick={toggleChat} />
        </div>
      </section>
    </main>
  );
};

export default RoomPage;
