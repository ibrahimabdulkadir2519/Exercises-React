import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


function LanguageButton() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(  language === "english" ? "spanish" : "english"
    );
  };

  return (
    <button onClick={toggleLanguage}>
      Switch {language === "english" ? "English" : "Spanish"}
    </button>
  );
}

export default LanguageButton;