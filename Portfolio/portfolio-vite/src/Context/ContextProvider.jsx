import { createContext, useState, useEffect, useContext, useRef } from "react";
import en from "../Languages/en.json"
import es from "../Languages/es.json"
export const LanThContext= createContext();


export function LanThContextProvider(props) {
    
    const switchLanRef = useRef();

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

    const [lan, setLan] = useState("en");
    const [theme, setTheme] = useState("white");
    function getAndChangeLan(){
        if(lan == "en"){
            setLan("es");
            console.log(switchLanRef.current.style)
            switchLanRef.current.style.animationFillMode = "forwards"
            switchLanRef.current.style.animationPlayState = "running";
            switchLanRef.current.style.backgroundSize = "cover";
        } else if (lan == "es"){
            setLan("en");
            switchLanRef.current.style.animationFillMode = "backwards"
            switchLanRef.current.style.backgroundSize = "cover"
        }

    }

    

    return (
        <LanThContext.Provider value={{
                lan, theme, setTheme, en, es, SkillsH1Ref, SkillsLiG1, SkillsLiG2, 
                SkillsLiG3, SkillsLiG4, SkillsLiG5, JSref, Reref, Viref, Eleref, Htref,
                Csref, Saref, Pyref, Djref, SQref, getAndChangeLan, switchLanRef
            }}>
            {props.children}
        </LanThContext.Provider>
    )
}