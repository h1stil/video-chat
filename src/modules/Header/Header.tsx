import { Button, Switch, ConfigProvider, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { devEnter } from "../../values/devValues";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [btnLogText, setBtnLogText] = useState(t("logIn"));
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("AUTH")) {
      setBtnLogText(t("logOut"));
    } else {
      setBtnLogText(t("logIn"));
    }
  }, [window.location.pathname]);

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
    const setBtn = () =>
      btnLogText === t("logOut") ? t("logOut") : t("logIn");
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
    setBtnLogText(setBtn);
  };

  const onClickEnterExit = (currText: string) => {
    if (currText == t("logIn")) {
      navigate("/login");
    } else {
      setBtnLogText(t("logIn"));
      window.localStorage.removeItem("AUTH");
      navigate("/");
    }
  };

  const onClickChat = () => {
    if (window.localStorage.getItem("AUTH") || devEnter) {
      navigate("/im");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <div className="header__chat" onClick={() => onClickChat()}>
          <h1>{t("txtChat")}</h1>
        </div>
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
        <Button
          className="header__login"
          onClick={() => onClickEnterExit(btnLogText)}
        >
          {btnLogText}
        </Button>
      </div>
    </div>
  );
};

export default Header;
