import React, { useContext, useEffect } from "react";
import "./video.css";
import "./RoomPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPleer } from "../modules/VideoPleer";
import { PeerState } from "../context/reducers/peerReducer";
import { ShareScreenButton } from "../modules/Buttons/ShareScreenButton";
import { ChatButton } from "../modules/Buttons/ChatButton";
import { Chat } from "../modules/chat/Chat";
import { ws } from "../values/globalValues";
import { VideoCameraOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { devEnter } from "../values/devValues";

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
    screenStream,
  } = useContext(RoomContext);

  const toggleCamera = () => {
    const videoDiv = document.getElementById("video__list");
    if (videoDiv) {
      if (videoDiv.style.display === "none" || !videoDiv.style.display) {
        videoDiv.style.display = "flex";
      } else {
        videoDiv.style.display = "none";
      }
    }
  };

  useEffect(() => {
    if (id) setRoomId(id);
  }, [id, setRoomId]);

  useEffect(() => {
    if (userId && stream)
      ws.emit("join-room", { roomId: id, peerId: userId, userName });
  }, [id, userId, ws, stream]);

  const screenSharingVideo =
    screenSharedId === userId ? screenStream : peers[screenSharedId]?.stream;

  const { [screenSharedId]: sharing, ...peersToShow } = peers;

  const activeUser = () => {
    const user = localStorage.getItem("active-contact");
    return user ? JSON.parse(user).name : null;
  };

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!(window.localStorage.getItem("AUTH") || devEnter)) {
      navigate("/login");
    }
  }, [window.localStorage]);

  return (
    <div className="video__main">
      <section className="video__frames">
        <div className="video__container container">
          <h2 className="page__title">{`${t(
            "txtChatRoomWith"
          )} ${activeUser()}`}</h2>
          <div className="controls">
            <VideoCameraOutlined
              style={{ fontSize: "36px", display: "block" }}
              onClick={toggleCamera}
              className="btn btn-camera"
              title={t("txtStartVideoChat") || "Начать / завершить видео чат"}
            />
            <ShareScreenButton onClick={shareScreen} />
            <ChatButton onClick={toggleChat} />
          </div>
          <ul className="video__list" id="video__list">
            {screenSharingVideo && (
              <li className="video__shared" key={stream?.id + "ufc"}>
                <VideoPleer stream={screenSharingVideo} />
                <p>{`Screen shared`}</p>
              </li>
            )}

            {screenSharedId !== userId && (
              <li className="video__item" key={-1}>
                {stream && <VideoPleer stream={stream} />}
                {/* <p>{`${userName} your id: ${userId}`}</p> */}
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
        </div>
      </section>
    </div>
  );
};

export default RoomPage;
