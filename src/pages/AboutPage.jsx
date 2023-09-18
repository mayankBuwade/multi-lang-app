import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-transform: capitalize">
      <h1 className="text-4xl mt-10 mb-10">{t("about_me")}</h1>
      <div className="mt-4">
        <div className="flex items-baseline mb-2">
          <h3 className="text-lg mr-4">{t("name_field")}:</h3>
          <p>Mayank Buwade</p>
        </div>
        <div className="flex items-baseline">
          <h3 className="text-lg mr-4">{t("linked_in")}:</h3>
          <a
            href="https://www.linkedin.com/in/mayank-buwade-8848b696/"
            target="_blank"
          >
            MayankBuwade@linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
