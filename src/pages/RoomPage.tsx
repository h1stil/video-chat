import React, { useContext, useEffect } from "react";
import "./video.css";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPleer } from "../modules/VideoPleer";
import { PeerState } from "../context/reducers/peerReducer";
import { ShareScreenButton } from "../modules/Buttons/ShareScreenButton";
import { ChatButton } from "../modules/Buttons/ChatButton";
import { Chat } from "../modules/chat/Chat";

const RoomPage = () => {
  const { id } = useParams();
  const {
    ws,
    me,
    stream,
    peers,
    chat,
    addMessage,
    toggleChat,
    shareScreen,
    screenSharedId,
    setRoomId,
    sendMessage,
    userName,
    setUserName,
  } = useContext(RoomContext);

  useEffect(() => {
    setRoomId(id);
  }, [id, setRoomId]);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id, userName });
  }, [id, me, ws]);

  const screenSharingVideo =
    screenSharedId === me?.id ? stream : peers[screenSharedId]?.stream;

  const { [screenSharedId]: sharing, ...peersToShow } = peers;
  return (
    <main className="video__main">
      <section className="video__frames">
        <div className="video__container container">
          <h1 className="page__title">{`Chat Room id: "${id}"`}</h1>
          <ul className="video__list">
            {screenSharingVideo && (
              <li className="video__shared" key={stream.id}>
                <VideoPleer stream={screenSharingVideo} />
              </li>
            )}

            {/* style={screenSharingVideo ? { height: "20%" } : { height: "80%" }} */}

            {screenSharedId !== me?.id && (
              <li className="video__item" key={-1}>
                <VideoPleer stream={stream} />
              </li>
            )}
            {Object.values(peersToShow as PeerState).map((peer) => (
              <li className="video__item" key={-2}>
                <VideoPleer stream={peer.stream} />
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
