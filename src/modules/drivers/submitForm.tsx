import { serverURI, portData, IRegForm, ILogForm } from "../../globalValues";

export default async function submitForm(
  type: string,
  values: IRegForm | ILogForm
) {
  const path = type === "register" ? "/auth/registrate" : "/auth/login";

  try {
    // const res = await fetch(`http://${serverURI}:${portData}${path}`, {
    //   mode: "no-cors",
    // });
    // console.log(res.status);
    // if (res.ok) {
    await fetch(`http://${serverURI}:${portData}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    // }

    // if (!res.ok) throw new Error();
  } catch (err) {
    return err;
  }
}
