import axios from "axios";
import { devEnter } from "../../values/devValues";
import { IRegForm, ILogForm } from "../../values/globalValues";
import isBan from "./isBan";
import jwt_decode from "jwt-decode";

export default async function submitForm(
  type: string,
  values: IRegForm | ILogForm
) {
  const path = type === "register" ? "/auth/registrate" : "/auth/login";
  const respCode = axios
    .post(
      // `https://pik-chat-backend.onrender.com${path}`,
      `${process.env.REACT_APP_HOST}${path}`,
      values
      // { timeout: 10000 }
    )
    .then((response) => {
      if (
        (response.status === 201 || devEnter) &&
        !isBan() &&
        type != "register"
      ) {
        window.localStorage.setItem("AUTH", response.data);
      } else {
        window.localStorage.removeItem("AUTH");
      }
      return devEnter ? 201 : response.status;
    })
    .then((respCode) => {
      const decode: any = jwt_decode(window.localStorage.getItem("AUTH")!);
      window.localStorage.setItem("userId", decode.id + "");
      window.localStorage.setItem("name", decode.name);
      return respCode;
    })
    .catch((err) => {
      const errText = document.getElementById("errorLogin");
      if (err.response.status === 401) {
        if (errText) errText.style.display = "block";
      } else {
        if (errText) errText.style.display = "none";
      }
      window.localStorage.removeItem("AUTH");
      return err.response.status;
    });
  return respCode;
}
