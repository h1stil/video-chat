import Dialog from "./components/Dialog/Dialog";
import "./MainPage.scss";
import { Input } from "antd";
import {
  AudioOutlined,
  LoadingOutlined,
  SendOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { recordMessage } from "./utils/recordMessage";
import testUsers from "./utils/testUsers.json";
import { useState } from "react";
import ContainerDialog from "./utils/ContainerDialogs";

const Contacts = JSON.parse(JSON.stringify(testUsers));

const MainPage = () => {
  const [sendMessage, setSendMessage] = useState("");
  const onSearch = (value: string) => value;
  const [inputValue] = useState("");

  return (
    <div className="main">
      <ContainerDialog
        props={Contacts}
        userId={1}
        onSearch={onSearch}
        inputValue={inputValue}
      />
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
