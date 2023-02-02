import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Register from "./modules/RegistrationForm/components/Register";
import Login from "./modules/RegistrationForm/components/Login";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content__container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
