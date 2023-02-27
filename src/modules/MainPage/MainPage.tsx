import "./MainPage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { devEnter } from "../../values/devValues";
import { IUser } from "./components/ContactList/ContactList";
import { CreateButton } from "../Buttons/CreateButton";
import ContainerDialog from "./utils/ContainerDialogs";

const MainPage = () => {
  let Contacts: IUser[];
  localStorage.getItem("friends")
    ? (Contacts = JSON.parse(localStorage.getItem("friends")!))
    : (Contacts = []);

  const navigate = useNavigate();

  const onSearch = (value: string) => value;
  const [inputValue] = useState("");

  useEffect(() => {
    if (!(window.localStorage.getItem("AUTH") || devEnter)) {
      navigate("/login");
    }
  }, [window.localStorage]);

  return (
    <div>
      <div>
        <ContainerDialog
          props={Contacts}
          onSearch={onSearch}
          inputValue={inputValue}
        />
      </div>
      <div className="main">
        <CreateButton />
      </div>
    </div>
  );
};

export default MainPage;
