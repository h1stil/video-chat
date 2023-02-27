import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Message } from "./Chat";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const { peers, userId } = useContext(RoomContext);
  const author = message.author && peers[message.author]?.userName;
  const userName = author || "Anonimus";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();
  const { t } = useTranslation();
  return (
    <div className={classNames("m-2 flex", {})}>
      <div className="dialog-message__message">
        <div className={classNames("inline-block py-2 px-4 rounded", {})}>
          {message.content}
          <div className={classNames("message__time", {})}>{time}</div>
        </div>
        <div className={classNames("text-md", {})}>
          {isSelf ? t("txtYou") : userName}
        </div>
      </div>
    </div>
  );
};
