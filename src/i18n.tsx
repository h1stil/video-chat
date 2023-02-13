import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translEng from "./translation/english/translation.json";
import translRus from "./translation/russian/translation.json";

const resources = {
  RU: {
    translation: translRus,
  },
  EN: {
    translation: translEng,
  },
};

const options = {
  order: [
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: options,
    fallbackLng: "RU",
    supportedLngs: ["RU", "EN"],
    resources,
  });

export default i18next;
