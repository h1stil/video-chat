import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Message } from "./Chat";
import classNames from "classnames";

export const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const { peers, userId } = useContext(RoomContext);
  const author = message.author && peers[message.author]?.userName;
  const userName = author || "Anonimus";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();
  return (
    <div
      className={classNames("m-2 flex", {
        // "pl-10 justify-end": isSelf,
        // "pr-10 justify-start": !isSelf,
      })}
    >
      <div className="dialog-message__message">
        <div
          className={classNames("inline-block py-2 px-4 rounded", {
            // "bg-red-200": isSelf,
            // "bg-red-300": !isSelf,
          })}
        >
          {message.content}
          <div
            className={classNames("message__time", {
              //   "text-right": isSelf,
              //   "text-left": !isSelf,
            })}
          >
            {time}
          </div>
        </div>
        <div
          className={classNames("text-md", {
            // "text-right": isSelf,
            // "text-left": !isSelf,
          })}
        >
          {isSelf ? "Вы" : userName}
        </div>
      </div>
    </div>
  );
};
