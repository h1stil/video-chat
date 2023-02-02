import { WarningFilled } from "@ant-design/icons";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <WarningFilled style={{ fontSize: "5em", margin: "10px" }} />
      <h2>Страница не найдена...</h2>
    </div>
  );
};

export default Page404;
