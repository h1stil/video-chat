import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>Logo</div>
      <Link to="/login">
        <Button className="header__login">Войти</Button>
      </Link>
    </div>
  );
};

export default Header;
