import { useEffect, useContext } from "react";
import { ObserverFunctionallity } from "./Functions/Observer";
import { mouseOn, mouseOut } from "./Functions/mouseFunctions";
import { LanThContext } from "../Context/ContextProvider";
import parse from 'html-react-parser';
export function Skills() {
    const { lan } = useContext(LanThContext)
    const {SkillsH1Ref, SkillsLiG1, SkillsLiG2, SkillsLiG3, SkillsLiG4, SkillsLiG5} = useContext(LanThContext)
    useEffect(() => {
        ObserverFunctionallity(SkillsH1Ref);
        ObserverFunctionallity(SkillsLiG1);
        ObserverFunctionallity(SkillsLiG2);
        ObserverFunctionallity(SkillsLiG3);
        ObserverFunctionallity(SkillsLiG4);
        
    }, [])
    
    const {JSref, Reref, Viref, Eleref, Htref, Csref, Saref, Pyref, Djref, SQref} = useContext(LanThContext);

    const proj1 =[Pyref]
    const proj2 = [JSref,Htref,Csref,Saref,Pyref,Djref,SQref];
    const proj3=[Reref,JSref,Viref,Htref,Csref,Saref];
    const proj4= [JSref,Htref,Csref,Eleref];
    return (
        <article id="proAndSkiCont" >
            <section id="projectsCont">
                <h1 id="projectsText">{lan.proandski.projects.title}</h1>
                <ul id="projects">

                <div onMouseEnter={()=>{mouseOn(proj1)}} onMouseLeave={()=>{mouseOut(proj1)}} >
                    <h2>{lan.proandski.projects.pro1.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro1.descrip)}
                            <label>{lan.proandski.projects.pro1.date}</label>
                        </p>
                        <img src="ProjectsPhotos/packetSniff.png" alt="Bustillos Packet Sniffer.png" />

                    </span>
                    <footer>
                        <a href="https://github.com/kickJS22/bustillos-packet-sniffer" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="Book List code" /></a>
                    </footer>
                </div>

                <div onMouseEnter={()=>{mouseOn(proj2)}} onMouseLeave={()=>{mouseOut(proj2)}} >
                    <h2>{lan.proandski.projects.pro2.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro2.descrip)}
                            <label>{lan.proandski.projects.pro2.date}</label>
                        </p>
                        <img src="ProjectsPhotos/BookList.png" alt="BookList.png" />

                    </span>
                    <footer>
                        <a href="https://github.com/kickJS22/BookList" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="Book List code" /></a>
                    </footer>
                </div>

                <div onMouseEnter={()=>{mouseOn(proj3)}} onMouseLeave={()=>{mouseOut(proj3)}}>
                    <h2>{lan.proandski.projects.pro3.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro3.descrip)}
                            <label>{lan.proandski.projects.pro3.date}</label>
                        </p>
                        <img src="ProjectsPhotos/viteCalculator.png" alt="Vite Calculator.png" />

                    </span>
                    <footer>
                        <a href="https://kickjs22.github.io/ViteCalculator/" target="_blank"><img src="iconsSVGS/icons8-enlace-externo-512.svg" alt="Vite calculator code" /></a>
                        <a href="https://github.com/kickJS22/ViteCalculator" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="Vite calculator live demo" /></a>
                    </footer>
                </div>

                <div onMouseEnter={()=>{mouseOn(proj4)}} onMouseLeave={()=>{mouseOut(proj4)}}>
                    <h2>{lan.proandski.projects.pro4.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro4.descrip)}
                            <label>{lan.proandski.projects.pro4.date}</label>
                        </p>
                        <img src="ProjectsPhotos/CodeElectron.png" alt="CodeElectron.png" />

                    </span>
                    <footer>
                        <a href="https://github.com/kickJS22/CodeNote-electron" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="Code Electron code" /></a>
                    </footer>
                </div>
                </ul>
            </section>

            <section id="skills">
                <h1 id="SkillsH1" ref={SkillsH1Ref}>{lan.proandski.skills.title}</h1>
                <ul>
                    <li ref={SkillsLiG1}>
                        <div>
                            <h4 ref={Reref}>React.js</h4>
                            <h4 ref={JSref}>JavaScript</h4>
                            <h4 ref={Viref}>Vite.js</h4>
                            <h4 ref={Eleref}>Electron.js</h4>
                            <h4 ref={Htref}>HTML</h4>
                            <h4 ref={Csref}>CSS</h4>
                            <h4 ref={Saref}>Sass</h4>
                            <h4 ref={Pyref}>Python</h4>
                            <h4 ref={Djref}>Django</h4>
							<h4>Git</h4>
                            <h4>C#</h4>
                        </div>
                        <h2>{lan.proandski.skills.subtitles.front}</h2>
                    </li>

                    <li ref={SkillsLiG2}>
                        <div>
                            <h4>Node.js</h4>
                            <h4>Express.js</h4>
                            <h4 ref={SQref}>SQLite</h4>
                        </div>
                        <h2>{lan.proandski.skills.subtitles.back}</h2>
                    </li>

                    <li ref={SkillsLiG3}>
                        <div>
                            <h4>Photoshop</h4>
                            <h4>Premiere Pro</h4>
                            <h4>Illustrator</h4>
                        </div>
                        <h2>{lan.proandski.skills.subtitles.apps}</h2>
                    </li>

                    <li ref={SkillsLiG4}>
                        <div>
                            <h4>Español</h4>
                            <h4>English</h4>
                        </div>
                        <h2>{lan.proandski.skills.subtitles.lang}</h2>
                    </li>

                </ul>
            </section>
        </article>
    )
}
