import Contact from "./components/Contact/Contact";
import Dialog from "./components/Dialog/Dialog";
import "./MainPage.scss";
import { Input } from "antd";

const MainPage = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="main">
      <div className="main__contacts">
        <div className="contacts__search">
          <Search
            className="contacts__search-input"
            placeholder="Поиск контактов"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div className="contacts__list">
          <Contact user={"test1"} isOnline={false} />
          <Contact user={"test2"} isOnline={true} />
        </div>
      </div>
      <div className="main__dialog">
        <div className="dialog__user">
          <p className="user__name">Username</p>
          <p className="user__status">online</p>
        </div>
        <Dialog />
        <div className="dialog__send-message">
          <Input placeholder="Введите текст сообщения" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
