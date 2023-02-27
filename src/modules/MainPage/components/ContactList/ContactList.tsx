import { FC } from "react";
import Contact from "../Contact/Contact";
import { Input, Empty } from "antd";
import AllUsersModal from "../AllUsersModal/AllUsersModal";
import { useTranslation } from "react-i18next";

export interface IUser {
  name: string;
  avatar: string;
  isOnline: boolean;
  email: string;
}

export interface IContact {
  user: IUser;
}

export interface PostsProps {
  props: IUser[];
  onSearch: (value: string) => void;
  inputValue?: string;
}

const ContactList: FC<PostsProps> = ({ props, onSearch }) => {
  const { t } = useTranslation();
  const { Search } = Input;

  return (
    <div>
      <div className="contacts__search">
        <div className="search__list">
          <AllUsersModal />
        </div>
        <Search
          className="contacts__search-input"
          placeholder={t("txtSearchWithinContacts") || "Поиск среди контактов"}
          allowClear
          onChange={(e) => onSearch(e.target.value)}
          onSearch={onSearch}
          style={{ width: 298, padding: "5px 10px" }}
        />
      </div>
      <div className="contacts">
        {props.length ? (
          props.map((item) => <Contact key={item.email} user={item} />)
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={t("txtNotFound")}
          />
        )}
      </div>
    </div>
  );
};

export default ContactList;
