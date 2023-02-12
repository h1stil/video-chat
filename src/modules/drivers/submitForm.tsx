import { devEnter } from "../../values/devValues";
import { IRegForm, ILogForm } from "../../values/globalValues";

export default async function submitForm(
  type: string,
  values: IRegForm | ILogForm
) {
  const path = type === "register" ? "/auth/registrate" : "/auth/login";

  try {
    const response = await fetch(
      `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${path}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (response.ok || devEnter) {
      // const { jwt_token } = response.json();
      // console.log(jwt_token);
      // console.log(response);
    } else {
      throw response.status;
    }
    return devEnter ? 201 : response.status;
  } catch (err) {
    return err;
  }
}
