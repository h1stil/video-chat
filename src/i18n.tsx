import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// export const defaultNS = "ru";

export const resources = {
  ru: {
    translation: {
      //header
      logIn: "Войти",
      logOut: "Выйти",
      txtChat: "ЧАТ",

      //login
      txtEnterAcc: "Войти в аккаунт",
      txtHintEnter: "Пожалуйста, войдите в свой аккаунт",
      txtEnterUsername: "Пожалуйста, введите имя пользователя",
      txtUsername: "Имя пользователя",
      txtEnterEmail: "Пожалуйста, введите корректный e-mail!",
      txtUserEmail: "E-mail пользователя",
      txtEnterPassword: "Пожалуйста, введите пароль!",
      txtPassword: "Пароль",
      txtEnter: "Войти",
      txtRegister: "Зарегистрироваться!",

      //registration
      txtRegistration: "Регистрация",
      txtHintRegister: "Для входа, Вам необходимо зарегестрироваться",
      txtVerify: "Подтвердите свой аккаунт",
      txtEmailConfirm:
        "На Вашу почту отправлено письмо с ссылкой на подтверждение!",
      txtIncorretEmail: "Введен неверный адрес электронной почты!",
      txtEmail: "Адрес электронной почты",
      txtConfirmPassword: "Пожалуйста, подтвердите пароль!",
      txtPasswordMismatch: "Пароли не совпадают!",
      txtRepeatPassword: "Повторите пароль",
      txtThisNameVisible: "Это имя будут видеть другие пользователи",

      //404
      txtPageNotFound: "Страница не найдена...",
    },
  },
  en: {
    translation: {
      logIn: "Login",
      logOut: "Logout",
      txtChat: "CHAT",

      //login
      txtEnterAcc: "Login your account",
      txtHintEnter: "Please login to your account",
      txtEnterUsername: "Please enter a username",
      txtUsername: "Username",
      txtEnterEmail: "Please enter a valid e-mail!",
      txtUserEmail: "User E-mail",
      txtEnterPassword: "Please enter password!",
      txtPassword: "Password",
      txtEnter: "Enter",
      txtRegister: "Register!",

      //registration
      txtRegistration: "Registration",
      txtHintRegister: "To enter, you need to register",
      txtVerify: "Verify your account",
      txtEmailConfirm:
        "An email with a confirmation link has been sent to your email!",
      txtIncorretEmail: "Incorrect password!",
      txtEmail: "Email",
      txtConfirmPassword: "Please confirm password",
      txtPasswordMismatch: "Password mismatch",
      txtRepeatPassword: "Repeat password",
      txtThisNameVisible: "This name will be visible to other users",

      //404
      txtPageNotFound: "Page not found...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  // ns: ["ns1", "ns2"],
  // defaultNS,
});

export default i18n;
