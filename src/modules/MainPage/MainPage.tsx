import Dialog from "./components/Dialog/Dialog";
import "./MainPage.scss";
import { Input } from "antd";
import ContactList from "./components/ContactList/ContactList";
import {
  AudioOutlined,
  LoadingOutlined,
  SendOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { recordMessage } from "./utils/recordMessage";
import testUsers from "./utils/testUsers.json";

const Contacts = JSON.parse(JSON.stringify(testUsers));

const MainPage = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const getMessageValue = () =>
    (document.querySelector(".send-message__value") as HTMLInputElement).value;
  return (
    <div className="main">
      <div className="main__contacts">
        <div className="contacts__search">
          <div className="search__list">
            <TeamOutlined />
            <span> Список диалогов</span>
          </div>
          <Search
            className="contacts__search-input"
            placeholder="Поиск среди контактов"
            allowClear
            onSearch={onSearch}
            style={{ width: 250, padding: "5px 10px" }}
          />
        </div>
        <div className="contacts__list">
          <ContactList props={Contacts} userId={1} />
        </div>
      </div>
      <div className="main__dialog">
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
