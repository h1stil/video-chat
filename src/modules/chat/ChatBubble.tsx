import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Message } from "./Chat";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const { peers, userId } = useContext(RoomContext);
  let author = message.author && peers[message.author]?.userName;
  const activeCont = localStorage.getItem("active-contact");
  if (!author && activeCont) {
    author = JSON.parse(activeCont).name;
  }
  const userName = author || "Anonimous";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();
  const { t } = useTranslation();
  return (
    <div className={classNames("m-2 flex", {})}>
      <div
        className={classNames("dialog-message__message", {
          "dialog-message__self": isSelf,
        })}
      >
        <div
          className={classNames(
            "inline-block py-2 px-4 rounded",
            "dialog-message__text"
          )}
        >
          {message.content}
          <div
            className={classNames(
              "message__time",
              {
                message__timeself: isSelf,
              },
              {
                message__selfname: isSelf,
                message__name: !isSelf,
              }
            )}
          >
            {time}
          </div>
        </div>
        <div
          className={classNames("text-md", {
            message__selfname: isSelf,
            message__name: !isSelf,
          })}
        >
          {isSelf ? t("txtYou") : userName}
        </div>
      </div>
    </div>
  );
};
