import React, { useState } from "react";
import { ws } from "../../values/globalValues";
import { useTranslation } from "react-i18next";

export const CreateButton: React.FC = () => {
  const { t } = useTranslation();
  const [activeName, setActiveName] = useState("...");

  const createRoom = () => {
    if (activeName !== "...") {
      ws.emit("create-room");
    } else {
      const btn = document.getElementById("createRoom");
      if (btn) {
        const storeBtnText = btn.innerHTML;
        btn.innerHTML = t("txtChooseContact1");
        setTimeout(() => {
          btn.innerHTML = storeBtnText;
        }, 3000);
      }
    }
  };

  const listen = setInterval(() => {
    const activeUserStr = localStorage.getItem("active-contact");
    const activeN = activeUserStr ? JSON.parse(activeUserStr).name : "...";

    if (activeN !== activeName) {
      setActiveName(activeN);
    }
  }, 1000);

  return (
    <button id="createRoom" onClick={createRoom}>
      {t("txtBtnNewMeeting")}
      <br />
      {activeName}
    </button>
  );
};
