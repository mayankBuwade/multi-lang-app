import { NavLink, Outlet } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "hi",
    name: "हिंदी",
    country_code: "in",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const DefaultLayout = () => {
  const { t } = useTranslation();
  const [currentLanguageCode, setCurrentLanguageCode] = useState(
    cookies.get("i18next") || "en"
  );
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );

  useEffect(() => {
    document.title = t("web_app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <header className="bg-slate-900 text-white h-14 flex justify-center">
        <ul className="w-[1440px]  flex  justify-end items-center px-4 font-semibold text-xl">
          <li className="mr-4">
            <NavLink to="/">{t("home_page")}</NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="about">{t("about_page")}</NavLink>
          </li>
          <li className="mr-4">
            <Dropdown
              options={languages}
              setCurrentValue={setCurrentLanguageCode}
              currentValue={currentLanguageCode}
            />
          </li>
        </ul>
      </header>
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};
export default DefaultLayout;
