import i18n from "i18next";

const LanguageSwitcher = () => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("ta")}>தமிழ்</button>
    </div>
  );
};

export default LanguageSwitcher;
