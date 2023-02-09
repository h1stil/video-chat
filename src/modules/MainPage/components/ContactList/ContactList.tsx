import { FC } from "react";
import Contact from "../Contact/Contact";
import { Input, Empty } from "antd";
import AllUsersModal from "../AllUsersModal/AllUsersModal";

interface IUser {
  name: string;
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

export interface PostsProps {
  props: IContact[];
  userId: number;
  onSearch: (value: string) => void;
  inputValue?: string;
}

const ContactList: FC<PostsProps> = ({ props, userId, onSearch }) => {
  const { Search } = Input;

  return (
    <div>
      <div className="contacts__search">
        <div className="search__list">
          <AllUsersModal />
        </div>
        <Search
          className="contacts__search-input"
          placeholder="Поиск среди контактов"
          allowClear
          onChange={(e) => onSearch(e.target.value)}
          onSearch={onSearch}
          style={{ width: 298, padding: "5px 10px" }}
        />
      </div>
      <div className="contacts">
        {props.length ? (
          props.map((item) => (
            <Contact
              key={item.user.id}
              user={item.user}
              lastMessage={item.lastMessage}
              isMe={item.user.id === userId}
            />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Не найдено"
          />
        )}
      </div>
    </div>
  );
};

export default ContactList;
