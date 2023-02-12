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
import { useEffect } from "react";
import socketIOClient from "socket.io-client";

const WS = "http://localhost:3001";

function App() {
  useEffect(() => {
    socketIOClient(WS);
  }, []);
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
