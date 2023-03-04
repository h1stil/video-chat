import axios from "axios";

export default function isBan(email: string) {
  const isBanned = axios
    .get(`${process.env.REACT_APP_HOST}/users/${email}`)
    .then((resp) => {
      const user = resp.data;
      return user.banned;
    });
  // .then((isBan) => {
  //   if (isBan) {
  //     const errText = document.getElementById("errorLogin");
  //     if (errText) {
  //       errText.style.display = "block";
  //       errText.innerHTML = "Доступ запрещен администратором";
  //     }
  //     return "banned";
  //   }
  // });
  return isBanned;
}
