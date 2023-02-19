import Dialog from "./components/Dialog/Dialog";
import "./MainPage.scss";
import { Input } from "antd";
import {
  AudioOutlined,
  AudioMutedOutlined,
  SendOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { recordMessage } from "./utils/recordMessage";
import { useState, useEffect } from "react";
import ContainerDialog from "./utils/ContainerDialogs";
import { useNavigate } from "react-router-dom";
import { devEnter } from "../../values/devValues";
import { IUser } from "./components/ContactList/ContactList";
import { useTranslation } from "react-i18next";
import RoomPage from "../../pages/RoomPage";
import { CreateButton } from "../Buttons/CreateButton";

const MainPage = () => {
  const { t } = useTranslation();
  let Contacts: IUser[];
  localStorage.getItem("friends")
    ? (Contacts = JSON.parse(localStorage.getItem("friends")!))
    : (Contacts = []);

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
      <CreateButton />
    </div>
  );
};

export default MainPage;
