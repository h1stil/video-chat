import { FC } from "react";
import Contact from "../Contact/Contact";

interface IUser {
  nickname: string;
  avatar: string;
  isOnline: boolean;
  id: number;
}

interface ILastMessage {
  text: string;
  isReading: boolean;
  created_at: string;
}

export interface IContact {
  user: IUser;
  lastMessage: ILastMessage;
  isMe: boolean;
}

interface PostsProps {
  props: IContact[];
  userId: number;
}

const ContactList: FC<PostsProps> = ({ props, userId }) => {
  return (
    <div className="contacts">
      {props.map((item) => (
        <Contact
          key={item.user.id}
          user={item.user}
          lastMessage={item.lastMessage}
          isMe={item.user.id === userId}
        />
      ))}
    </div>
  );
};

export default ContactList;
