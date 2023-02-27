import React from "react";
import { ws } from "../../values/globalValues";
import { useTranslation } from "react-i18next";

export const CreateButton: React.FC = () => {
  const { t } = useTranslation();
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <button id="createRoom" onClick={createRoom}>
      {t("txtBtnNewMeeting")}
    </button>
  );
};
