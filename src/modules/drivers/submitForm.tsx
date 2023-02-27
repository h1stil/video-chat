import axios from "axios";
import { devEnter } from "../../values/devValues";
import { IRegForm, ILogForm } from "../../values/globalValues";

export default async function submitForm(
  type: string,
  values: IRegForm | ILogForm
) {
  const path = type === "register" ? "/auth/registrate" : "/auth/login";
  const respCode = axios
    .post(`${process.env.REACT_APP_HOST}${path}`, values)
    .then((response) => {
      if ((response.status === 201 || devEnter) && type != "register") {
        window.localStorage.setItem("AUTH", response.data);
      } else {
        window.localStorage.removeItem("AUTH");
      }
      return devEnter ? 201 : response.status;
    })
    .then((respCode) => {
      // if (type != "register") {
      //   const decode: any = jwt_decode(window.localStorage.getItem("AUTH")!);
      //   window.localStorage.setItem("userId", decode.id + "");
      //   window.localStorage.setItem("name", decode.name);
      // }
      return respCode;
    })
    .catch((err) => {
      return err.response.status;
    });
  return respCode;
}
