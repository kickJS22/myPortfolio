import { createContext, useState, useEffect, useContext, useRef } from "react";
import en from "../Languages/en.json"
import es from "../Languages/es.json"
export const LanThContext= createContext();


export function LanThContextProvider(props) {
    
    const switchLanRef = useRef();
    const switchThemeRef = useRef();

    const switchLanRefRes = useRef();
    const switchThemeRefRes = useRef();

    const SkillsH1Ref = useRef();
    const SkillsLiG1 = useRef()
    const SkillsLiG2 = useRef()
    const SkillsLiG3 = useRef()
    const SkillsLiG4 = useRef()
    const SkillsLiG5 = useRef()

    const JSref = useRef();
    const Reref = useRef();
    const Viref = useRef();
    const Eleref = useRef();
    const Htref = useRef();
    const Csref = useRef();
    const Saref = useRef();
    const Pyref = useRef();
    const Djref = useRef();
    const SQref = useRef();

    const [lan, setLan] = useState(en);
    
    function getAndChangeLan(){
        if(lan == en){
            setLan(es);
            console.log(switchLanRef.current)
            switchLanRef.current.style.backgroundImage = "url(Lang/lanEn.png)";
        } else if (lan == es){
            setLan(en);
            switchLanRef.current.style.backgroundImage = "url(Lang/lanEs.png)";
        }
        
    }

    function getAndChangeLanRes(){
        if(lan == en){
            setLan(es);
            switchLanRefRes.current.style.backgroundImage = "url(Lang/lanEn.png)";
            console.log(switchLanRefRes.current.style.backgroundImage)
        } else if (lan == es){
            setLan(en);
            switchLanRefRes.current.style.backgroundImage = "url(Lang/lanEs.png)";
        }
        
    }
    
    const [theme, setTheme] = useState("white");

    function changeTheme(){
        if(theme == "white"){
            setTheme("black");
            switchThemeRef.current.style.backgroundImage = "url(iconsSVGS/sun.png)";
            switchThemeRef.current.style.backgroundColor = "white"
        } else if(theme == "black"){
            switchThemeRef.current.style.backgroundImage = "url(iconsSVGS/moon.png)";
            switchThemeRef.current.style.backgroundColor = "black";
            setTheme("white");
        }
    }
    
    function changeThemeRes(){
        if(theme == "white"){
            setTheme("black");
            switchThemeRefRes.current.style.backgroundImage = "url(iconsSVGS/sun.png)";
            switchThemeRefRes.current.style.backgroundColor = "white"
        } else if(theme == "black"){
            switchThemeRefRes.current.style.backgroundImage = "url(iconsSVGS/moon.png)";
            switchThemeRefRes.current.style.backgroundColor = "black";
            setTheme("white");
        }
    }

    return (
        <LanThContext.Provider value={{
                lan, theme, changeTheme, en, es, SkillsH1Ref, SkillsLiG1, SkillsLiG2, 
                SkillsLiG3, SkillsLiG4, SkillsLiG5, JSref, Reref, Viref, Eleref, Htref,
                Csref, Saref, Pyref, Djref, SQref, getAndChangeLan, switchLanRef, switchThemeRef,
                switchLanRefRes, switchThemeRefRes, getAndChangeLanRes, changeThemeRes
            }}>
            {props.children}
        </LanThContext.Provider>
    )
}