import { Button, Switch, ConfigProvider, Select } from "antd";
import { Link } from "react-router-dom";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  //заменить изменения состояния кнопки в зависимости от наличия токена
  const location = useLocation();
  const [btnLogText, setBtnLogText] = useState(t("logIn"));

  useEffect(() => {
    const page = window.location.pathname;
    if (page === "/im") {
      setBtnLogText(t("logOut"));
      // console.log(t("logOut"));
    } else {
      setBtnLogText(t("logIn"));
      // console.log(t("logIn"));
    }
  }, [location]);
  //

  const onChange = (checked: boolean) => {
    const trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
    if (checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      trans();
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      trans();
    }
  };

  const handleLanguage = (value: string) => {
    switch (value) {
      case "RU":
        i18n.changeLanguage("ru");
        break;
      case "EN":
        i18n.changeLanguage("en");
        break;
      default:
        break;
    }
  };

  // const logText = page;

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <Link to="/im">
          <div className="header__chat">
            <h1>{t("txtChat")}</h1>
          </div>
        </Link>
      </div>
      <div className="header__right">
        <Select
          defaultValue="RU"
          style={{ width: 61 }}
          onChange={handleLanguage}
          options={[
            {
              value: "RU",
              label: <span className="fi fi-ru"></span>,
            },
            { value: "EN", label: <span className="fi fi-gb"></span> },
          ]}
        />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000",
            },
          }}
        >
          <Switch onChange={onChange} />
        </ConfigProvider>
        <Link to="/login">
          <Button className="header__login">{btnLogText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
