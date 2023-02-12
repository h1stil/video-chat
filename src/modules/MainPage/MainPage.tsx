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
import { useState, useEffect } from "react";
import ContainerDialog from "./utils/ContainerDialogs";
import { useNavigate } from "react-router-dom";
import { devEnter } from "../../values/devValues";

const Contacts = JSON.parse(JSON.stringify(testUsers));

const MainPage = () => {
  const [sendMessage, setSendMessage] = useState("");
  const onSearch = (value: string) => value;
  const [inputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!(window.localStorage.getItem("AUTH") || devEnter)) {
      navigate("/login");
    }
  }, [window.localStorage]);

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
