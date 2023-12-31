import { useRef, useEffect } from "react";
import { ObserverFunctionallity } from "./Functions/Observer";
import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";
import parse from 'html-react-parser';
export function About() {
    const { en, lan } = useContext(LanThContext)
    const h1Ref = useRef();
    const aRef = useRef();
    const pRef = useRef()
    const imgRef = useRef();
    useEffect(()=>{
        ObserverFunctionallity(h1Ref);
        ObserverFunctionallity(aRef);
        ObserverFunctionallity(pRef);
        ObserverFunctionallity(imgRef);
    },[]);
    return (
        <section id="about">
            <h1 ref={h1Ref}>{lan.about.subtitle}</h1>
            <div>
                <p ref={pRef}>{parse(lan.about.descrip)}</p>
                <img ref={imgRef} src="perfil.jpg" alt="Me.jpg" />
            </div>
            <a ref={aRef} href={ lan == en ? "CV/English-CV.pdf" : "CV/Español-CV.pdf"} target="_blank" rel="noopener noreferrer" download={"Juan_Ignacio_Bustillos_CV.pdf"}>{lan.about.cvtext}<img src="iconsSVGS/arrowICON.png" alt="Cv.pdf" /></a>
        </section>
    )
}

