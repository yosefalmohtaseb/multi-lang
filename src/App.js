import './App.css'
import {useState} from "react";

const language={
    Ar:{
        header:{
            Home:"الرسية",
            About:"عنا",
            "Contact":"تاصل",
        },
        Cites:{
            title:"المدن",
            Gaza:"غزة",
            Nablus:"نابلس",
            Rafah:"رفح",
            London:"لندن",
            Paris:"باريس",
            Hebron:"خليل",
            Jerusalem:"قدس",
        }
    },
    En:{
        header:{
            Home:"Home",
            About:"About",
            "Contact":"Contact us",
        },
        Cites:{
            title:"Cites",
            Gaza:"Gaza",
            Nablus:"Nablus",
            Rafah:"Rafah",
            London:"London",
            Paris:"Paris",
            Hebron:"Hebron",
            Jerusalem:"Jerusalem",
        }
    },
    Fr:{
        header:{
            Home:"Home Fr",
            About:"About Fr",
            "Contact":"Contact us Fr",
        },
        Cites:{
            title:"Cites Fr",
            Gaza:"Gaza Fr",
            Nablus:"Nablus Fr",
            Rafah:"Rafah Fr",
            London:"London Fr",
            Paris:"Paris Fr",
            Hebron:"Hebron Fr",
            Jerusalem:"Jerusalem Fr",
        }
    }
}

function App() {
    const lang=localStorage.getItem("lang")
    const [state, setState]=useState(lang || "Ar")

    const setLang=(lang)=>{
        setState(lang)
        localStorage.setItem("lang", lang)
    }

    const translatedObj=language[state]
  return (
    <div className={`App ${state==="Ar"&&"rtlDr"}`}>
      <header className="App-header fl fdr">
            <a className={"a"}>
                {translatedObj.header.Home}
            </a>
          <a className={"a"}>
              {translatedObj.header.About}
            </a>
          <a className={"a"}>
              {translatedObj.header['Contact']}
            </a>
      </header>

        <div className={"mt fl fdc"}>
            <h1 className={"ml"}>{translatedObj.Cites.title}</h1>
            <h2 className={"ml"}>{translatedObj.Cites.Gaza}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.Nablus}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.Rafah}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.London}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.Paris}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.Hebron}</h2>
            <h2 className={"ml"}>{translatedObj.Cites.Jerusalem}</h2>
        </div>

        <div className={"mt fl"}>
            <button onClick={()=>setLang("Ar") }>Ar</button>
            <button onClick={()=>setLang("En")}>En</button>
            <button onClick={()=>setLang("Fr")}>Fr</button>
        </div>
        {state}
    </div>
  );
}

export default App;
