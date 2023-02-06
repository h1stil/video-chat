import { WarningFilled } from "@ant-design/icons";
import "./Page404.css";
import { useTranslation } from "react-i18next";

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className="page-404">
      <WarningFilled style={{ fontSize: "5em", margin: "10px" }} />
      <h2>{t("txtPageNotFound")}</h2>
    </div>
  );
};

export default Page404;
