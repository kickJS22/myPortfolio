import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";

export function Nav() {
    const { en, es, getAndChangeLan, lan, switchLanRef, changeTheme} = useContext(LanThContext)
    
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
                    <li>
                        <button onClick={()=>{changeTheme()}}>tema</button>
                    </li>
                </ul>
            </nav>
            <nav id="mainText">
                <h1>JUAN IGNACIO <span id="bus">BUSTILLOS</span></h1>
                <h2>{lan == "en" ? en.subtitle : es.subtitle}</h2>
                <section id="contact">
                    <a target="_blank" href="https://github.com/kickJS22"><img src="iconsSVGS/icons8-github violeta.svg" alt="Github.svg" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/juan-ignacio-bustillos-800b2b271/"><img src="iconsSVGS/icons8-linkedin.svg" alt="Linkedin.svg" /></a>
                    <a href="mailto:bustillosjuani16@gmail.com"><img src="iconsSVGS/icons8-gmail.svg" alt="Email.svg" /></a>
                </section>
            </nav>
        </>
    )
}