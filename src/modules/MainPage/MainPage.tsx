import "./MainPage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { devEnter } from "../../values/devValues";
import { IUser } from "./components/ContactList/ContactList";
import { CreateButton } from "../Buttons/CreateButton";

const MainPage = () => {
  let Contacts: IUser[];
  localStorage.getItem("friends")
    ? (Contacts = JSON.parse(localStorage.getItem("friends")!))
    : (Contacts = []);

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
