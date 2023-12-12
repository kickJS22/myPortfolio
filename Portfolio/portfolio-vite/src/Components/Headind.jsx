import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";

export function Nav() {
    const { getAndChangeLan, lan, switchLanRef, switchThemeRef, changeTheme } = useContext(LanThContext)

    return (
        <>
            <nav id="stickyHeading">
                <ul>
                    <li>
                        <a href="#about">{lan.about.title}</a>
                        <a href="#proAndSkiCont">{lan.proandski.projects.title}</a>
                        <a href="#head">{lan.contact.title}</a>
                    </li>
                    <li>
                        <span id="lang" ref={switchLanRef}>
                            <button onClick={() => { getAndChangeLan() }}></button>
                        </span>
                    </li>
                    <li>
                        <span id="theme" ref={switchThemeRef}>
                            <button onClick={() => { changeTheme() }}></button>
                        </span>
                    </li>
                </ul>
            </nav>
            <nav id="mainText">
                <h1 id="head">JUAN IGNACIO <span id="bus">BUSTILLOS</span></h1>
                <h2>{lan.subtitle}</h2>
                <section id="contact">
                    <a target="_blank" href="https://github.com/kickJS22"><img src="iconsSVGS/icons8-github violeta.svg" alt="Github.svg" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/juan-ignacio-bustillos-800b2b271/"><img src="iconsSVGS/icons8-linkedin.svg" alt="Linkedin.svg" /></a>
                    <a href="mailto:bustillosjuani16@gmail.com"><img src="iconsSVGS/icons8-gmail.svg" alt="Email.svg" /></a>
                </section>
            </nav>
        </>
    )
}