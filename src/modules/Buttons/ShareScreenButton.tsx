import { useTranslation } from "react-i18next";

export const ShareScreenButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <button
      className="btn btn-video"
      onClick={onClick}
      aria-label={t("txtShareScreen") || "Демонстрация экрана"}
      title={t("txtShareScreenOnOff") || "Демонстрация экрана вкл/выкл"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // style={{ width: "60px", height: "60px" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </button>
  );
};
