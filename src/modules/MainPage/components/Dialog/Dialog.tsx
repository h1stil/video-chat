import { useEffect, useState } from "react";
import MessagesList from "../../utils/MessagesList";
import { IUser } from "../ContactList/ContactList";
import "./Dialog.scss";

const Dialog = () => {
  const initialState: IUser = {
    id: NaN,
    avatar: "",
    isOnline: false,
    name: "",
  };
  const [activeUser, setActiveUser] = useState<IUser>(initialState);

  localStorage.getItem("active-contact")
    ? activeUser
    : localStorage.setItem("active-contact", JSON.stringify(initialState));

  useEffect(() => {
    setActiveUser(JSON.parse(localStorage.getItem("active-contact")!));
  }, []);

  return (
    <div className="message__container">
      <div className="dialog__user">
        <p className="user__name">{activeUser ? activeUser.name : null}</p>
        {activeUser!.name ? (
          <div className="user__status">
            {activeUser!.isOnline ? (
              <p className="user__status_online">в сети</p>
            ) : (
              <p className="user__status_offline">не в сети</p>
            )}
          </div>
        ) : null}
      </div>
      <MessagesList items={[]} />
    </div>
  );
};

export default Dialog;
