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
import { useState } from "react";

const Contacts = JSON.parse(JSON.stringify(testUsers));

const MainPage = () => {
  const [sendMessage, setSendMessage] = useState("");
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

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
            onChange={(e) => onSearch(e.target.value)}
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
            onChange={(e) => {
              setSendMessage(e.target.value);
            }}
          />
          <div className="send-message__panel">
            <VideoCameraOutlined className="panel__video" />
            {sendMessage ? (
              <SendOutlined onClick={() => console.log(sendMessage)} />
            ) : (
              <div className="panel__record" onClick={() => recordMessage()}>
                <AudioOutlined className="panel__record_start" />
                <LoadingOutlined className="panel__record_stop active" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
