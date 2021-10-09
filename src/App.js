import './App.css'
import changeLanguage from "./lang/changeLang";
import {useTranslation} from "react-i18next";

function App() {
    const {i18n, t}=useTranslation()

    const setLang=(lang)=>{
        changeLanguage(lang, i18n)
    }

  return (
    <div className={`App ${i18n.language==="Ar"&&"rtlDr"}`}>
      <header className="App-header fl fdr">
            <a className={"a"}>
                {t('header.Home')}
            </a>
          <a className={"a"}>
              {t("header.About")}
            </a>
          <a className={"a"}>
              {t("header.Contact")}
            </a>
      </header>

        <div className={"mt fl fdc"}>
            <h1 className={"ml"}>{t("Cites.title")}</h1>
            <h2 className={"ml"}>{t("Cites.Gaza")}</h2>
            <h2 className={"ml"}>{t("Cites.Nablus")}</h2>
            <h2 className={"ml"}>{t("Cites.Rafah")}</h2>
            <h2 className={"ml"}>{t("Cites.London")}</h2>
            <h2 className={"ml"}>{t("Cites.Paris")}</h2>
            <h2 className={"ml"}>{t("Cites.Hebron")}</h2>
            <h2 className={"ml"}>{t("Cites.Jerusalem")}</h2>
        </div>

        <div className={"mt fl"}>
            <button onClick={()=>setLang("Ar") }>Ar</button>
            <button onClick={()=>setLang("En")}>En</button>
            <button onClick={()=>setLang("Fr")}>Fr</button>
        </div>
        {i18n.language}
    </div>
  );
}

export default App;
