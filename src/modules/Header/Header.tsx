import { Button, Switch, ConfigProvider, Select } from "antd";
import { Link } from "react-router-dom";
import "./Header.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
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
    console.log(`selected ${value}`);
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">LOGO</div>
      </Link>
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
          <Button className="header__login">Войти</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
