import { FC } from "react";
import createRandomColor from "../../utils/createRandomAvatart";
import { IContact } from "../ContactList/ContactList";
import "./Contact.scss";

const Contact: FC<IContact> = ({ user, lastMessage, isMe }) => {
  createRandomColor(user.name);
  return (
    <div className="contact__item">
      {!user.avatar ? (
        <div
          className="contact__avatar"
          style={{ background: createRandomColor(user.name) }}
        >
          <span className="avatar__first-char">
            {user.name[0].toUpperCase()}
          </span>
          {user.isOnline ? <div className="avatar__online"></div> : null}
        </div>
      ) : (
        <div
          className="contact__avatar"
          style={{
            backgroundImage: `url("${user.avatar}")`,
            backgroundSize: "cover",
          }}
        >
          <span className="avatar__first-char"></span>
          {user.isOnline ? <div className="avatar__online"></div> : null}
        </div>
      )}
      <div className="contact__text">
        <p className="contact__name">{user.name}</p>
        <p className="contact__last-message">{lastMessage.text}</p>
      </div>
      {!isMe ? (
        lastMessage.isReading ? (
          <span className="message__checked">&#10003;&#10003;</span>
        ) : (
          <span className="message__checked">&#10003;</span>
        )
      ) : null}
    </div>
  );
};

export default Contact;
