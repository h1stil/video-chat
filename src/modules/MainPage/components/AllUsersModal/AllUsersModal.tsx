import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { fetchAllUsersSlice } from "../../../../redux/reducers/fetchAllUsers";
import "./AllUsersModal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TeamOutlined } from "@ant-design/icons";
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
    width: "80%",
    height: "80vh",
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "20px",
  };

  const { Search } = Input;

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
          <div className="all-users__container">
            {allUsers.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AllUsersModal;
