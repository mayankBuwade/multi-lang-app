import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-4xl mt-10">{t("welcome_message")}</h1>
    </div>
  );
};
export default HomePage;
