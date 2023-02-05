import Dialog from "./components/Dialog/Dialog";
import "./MainPage.scss";
import { Input } from "antd";
import ContactList from "./components/ContactList/ContactList";
import {
  AudioOutlined,
  LoadingOutlined,
  SendOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { recordMessage } from "./utils/recordMessage";

const Contacts = [
  {
    user: {
      avatar: "",
      isOnline: true,
      id: 1,
      nickname: "test1",
    },
    lastMessage: {
      text: "hellol",
      created_at: "4:34",
      isReading: false,
    },

    isMe: false,
  },
  {
    user: {
      avatar: "",
      isOnline: false,
      id: 2,
      nickname: "test2",
    },
    lastMessage: {
      text: "hellol",
      created_at: "12:01",
      isReading: true,
    },
    isMe: false,
  },
];

const MainPage = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const getMessageValue = () =>
    (document.querySelector(".send-message__value") as HTMLInputElement).value;
  return (
    <div className="main">
      <div className="main__contacts">
        <div className="contacts__search">
          <Search
            className="contacts__search-input"
            placeholder="Поиск контактов"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div className="contacts__list">
          <ContactList props={Contacts} userId={1} />
        </div>
      </div>
      <div className="main__dialog">
        <div className="dialog__user">
          <p className="user__name">Username</p>
          <p className="user__status">online</p>
        </div>
        <Dialog />
        <div className="dialog__send-message">
          <Input
            className="send-message__value"
            placeholder="Введите текст сообщения"
          />
          <div className="send-message__panel">
            <VideoCameraOutlined />
            <div className="panel__record" onClick={() => recordMessage()}>
              <AudioOutlined className="panel__record_start" />
              <LoadingOutlined className="panel__record_stop active" />
            </div>
            <SendOutlined onClick={() => console.log(getMessageValue())} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
