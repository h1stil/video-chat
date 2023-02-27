import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Register from "./modules/RegistrationForm/components/Register";
import Login from "./modules/RegistrationForm/components/Login";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import Page404 from "./pages/Page404";
import StartPage from "./pages/StartPage";
import MainPage from "./modules/MainPage/MainPage";
import Video from "./pages/video";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import RoomPage from "./pages/RoomPage";
import { IUser } from "./modules/MainPage/components/ContactList/ContactList";
// import { WS } from "./globalValues";

function App() {
  useEffect(() => {
    const WS = process.env.REACT_APP_WS as string;
    socketIOClient(WS);
  }, []);

  let Contacts: IUser[];
  localStorage.getItem("friends")
    ? (Contacts = JSON.parse(localStorage.getItem("friends")!))
    : (Contacts = []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content__container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/im" element={<MainPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/room/:id" element={<RoomPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
