import MessagesList from "../../utils/MessagesList";
import { scrollMessages } from "../../utils/scrollMessages";
import "./Dialog.scss";

const Dialog = () => {
  const status: "offline" | "online" = "online";
  window.onload = scrollMessages;

  return (
    <div className="message__container">
      <div className="dialog__user">
        <p className="user__name">Username</p>
        <div className="user__status">
          {status === "online" ? (
            <p className="user__status_online">в сети</p>
          ) : (
            <p className="user__status_offline">не в сети</p>
          )}
        </div>
      </div>
      <MessagesList
        // items={[
        //   {
        //     avatar: "",
        //     date: Date.now(),
        //     isReading: false,
        //     answer: false,
        //     message: "hi",
        //   },
        //   {
        //     avatar: "",
        //     date: Date.now(),
        //     isReading: false,
        //     answer: true,
        //     message: "hi",
        //   },
        // ]}
        items={[]}
      />
    </div>
  );
};

export default Dialog;
