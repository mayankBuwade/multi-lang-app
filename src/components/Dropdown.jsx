import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Dropdown = ({ options, setCurrentValue, currentValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative">
      <button className="text-whitemin-w-[45px]" onClick={handleButtonClick}>
        <span className="material-symbols-outlined text-3xl">language</span>
      </button>
      <div
        className={`z-10 ${
          showMenu ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-3 right-0`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <label className="ml-4 text-lg text-white">
            {t("curr_language")}
          </label>
          {options.map(({ key, code, name }) => {
            return (
              <li
                key={code}
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  currentValue == code ? "text-gray-800" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentValue(code);
                    i18next.changeLanguage(code);
                    setShowMenu(!showMenu);
                  }}
                  className="flex w-full"
                  disabled={currentValue == code}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;
