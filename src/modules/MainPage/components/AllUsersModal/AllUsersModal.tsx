import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { fetchAllUsersSlice } from "../../../../redux/reducers/fetchAllUsers";
import "./AllUsersModal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TeamOutlined } from "@ant-design/icons";
import Contact from "../Contact/Contact";
import { Input } from "antd";

const AllUsersModal = () => {
  const dispath = useAppDispatch();
  const { allUsers } = useAppSelector((state) => state.allUsers);

  useEffect(() => {
    dispath(fetchAllUsersSlice());
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "20px",
    overflow: "auto",
  };

  const onSearch = (value: string) => value;
  const { Search } = Input;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="list__all-users">
      <div className="all-users__button" onClick={handleOpen}>
        <TeamOutlined />
        <span> Список всех пользователей</span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Search
              className="all-users__search-input"
              placeholder="Поиск среди пользователей"
              allowClear
              onChange={(e) => {
                onSearch(e.target.value);
                setInputValue(e.target.value);
              }}
              onSearch={onSearch}
              style={{ width: 298, padding: "5px 10px" }}
            />
          </div>
          <div className="all-users__container">
            {allUsers
              .filter(
                (filtred) => filtred.name.toLowerCase().indexOf(inputValue) >= 0
              )
              .map((user) => (
                <div
                  className="all-users__item"
                  key={user.id}
                  onClick={() => console.log(user)}
                >
                  <Contact
                    user={{
                      avatar: user.avatar as string,
                      id: user.id,
                      name: user.name,
                      isOnline: false,
                    }}
                    lastMessage={null}
                    isMe={false}
                  />
                </div>
              ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AllUsersModal;
