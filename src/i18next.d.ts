// import { resources } from "./i18n";
import { resources } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    // defaultNS: typeof defaultNS;
    resources: typeof resources["ru"];
  }
}
