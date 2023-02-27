import { FC } from "react";
import createRandomColor from "../../utils/createRandomAvatart";
import { IContact } from "../ContactList/ContactList";
import "./Contact.scss";

const Contact: FC<IContact> = ({ user }) => {
  createRandomColor(user.name);
  return (
    <div
      className="contact__item"
      onClick={() => {
        localStorage.removeItem("active-contact");
        localStorage.setItem("active-contact", JSON.stringify(user));
        window.location.href = `mailto:${user.email}`;
      }}
    >
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
      </div>
    </div>
  );
};

export default Contact;
