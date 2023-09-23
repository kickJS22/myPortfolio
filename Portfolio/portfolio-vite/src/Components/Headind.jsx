import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";

export function Nav() {
    const { en, es, getAndChangeLan, lan, switchLanRef} = useContext(LanThContext)
    
    return (
        <>
            <nav id="stickyHeading">
                <ul>
                    <li>
                        <a href="#about">{lan == "en" ? en.about.title : es.about.title}</a>
                        <a href="#proAndSkiCont">{lan == "en" ? en.proandski.projects.title : es.proandski.projects.title}</a>
                        <a href="#contact">{lan == "en" ? en.contact.title : es.contact.title}</a>
                    </li>
                    <li>
                        <span ref={switchLanRef}>
                            <input onChange={()=>{getAndChangeLan()}} type="checkbox" name="" id="" />                    
                        </span>
                    </li>
                </ul>
            </nav>
            <nav>
                <h1>JUAN IGNACIO <span id="bus">BUSTILLOS</span></h1>
                <h2>{lan == "en" ? en.subtitle : es.subtitle}</h2>
            </nav>
        </>
    )
}