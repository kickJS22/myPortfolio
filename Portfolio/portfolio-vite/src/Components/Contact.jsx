import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";

export function ContactInfo(){
    const { en, es, lan} = useContext(LanThContext)
    return(
        <article id="contact">
            <h1>{lan == "en" ? en.contact.title : es.contact.title}</h1>
            <section>
                <a target="_blank" href="https://www.linkedin.com/in/juan-ignacio-bustillos-800b2b271/"><img src="iconsSVGS/icons8-linkedin.svg" alt="Linkedin.svg" /></a>
                <a href="mailto:bustillosjuani16@gmail.com"><img src="iconsSVGS/icons8-gmail.svg" alt="Email.svg" /></a>
                <a target="_blank" href="https://github.com/kickJS22"><img src="iconsSVGS/icons8-github violeta.svg" alt="Github.svg" /></a>
            </section>
        </article>
    )
}