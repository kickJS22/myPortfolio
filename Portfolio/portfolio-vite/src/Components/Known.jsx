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
        ObserverFunctionallity(SkillsLiG5);
    }, [])
    
    const {JSref, Reref, Viref, Eleref, Htref, Csref, Saref, Pyref, Djref, SQref} = useContext(LanThContext);

    const proj1 = [JSref,Htref,Csref,Saref,Pyref,Djref,SQref];
    const proj2=[Reref,JSref,Viref,Htref,Csref,Saref];
    const proj3= [JSref,Htref,Csref,Eleref];

    return (
        <article id="proAndSkiCont" >
            <section id="projects">
                <h1>{lan.proandski.projects.title}</h1>
                <div onMouseEnter={()=>{mouseOn(proj1)}} onMouseLeave={()=>{mouseOut(proj1)}} >
                    <h2>{lan.proandski.projects.pro1.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro1.descrip)}
                            <label>{lan.proandski.projects.pro1.date}</label>
                        </p>
                        <img src="" alt="Falta Foto" />

                    </span>
                    <footer>
                        <a href="https://github.com/kickJS22/BookList" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="" /></a>
                    </footer>
                </div>
                <div onMouseEnter={()=>{mouseOn(proj2)}} onMouseLeave={()=>{mouseOut(proj2)}}>
                    <h2>{lan.proandski.projects.pro2.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro2.descrip)}
                            <label>{lan.proandski.projects.pro2.date}</label>
                        </p>
                        <img src="ProjectsPhotos/viteCalculator.png" alt="Vite Calculator.png" />

                    </span>
                    <footer>
                        <a href="https://kickjs22.github.io/ViteCalculator/" target="_blank"><img src="iconsSVGS/icons8-enlace-externo-512.svg" alt="" /></a>
                        <a href="https://github.com/kickJS22/ViteCalculator" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="" /></a>
                    </footer>
                </div>
                <div onMouseEnter={()=>{mouseOn(proj3)}} onMouseLeave={()=>{mouseOut(proj3)}}>
                    <h2>{lan.proandski.projects.pro3.title}</h2>
                    <span>
                        <p>
                            {parse(lan.proandski.projects.pro3.descrip)}
                            <label>{lan.proandski.projects.pro3.date}</label>
                        </p>
                        <img src="" alt="Falta Foto" />

                    </span>
                    <footer>
                        <a href="https://github.com/kickJS22/CodeNote-electron" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="" /></a>
                    </footer>
                </div>
            </section>

            <section id="skills">
                <h1 id="SkillsH1" ref={SkillsH1Ref}>{lan.proandski.skills.title}</h1>
                <ul>
                    <li ref={SkillsLiG1}>
                        <div>
                            <h4 ref={Reref}>React</h4>
                            <h4 ref={JSref}>JavaScript</h4>
                            <h4 ref={Viref}>Vite</h4>
                            <h4 ref={Eleref}>Electron</h4>
                            <h4 ref={Htref}>Html</h4>
                            <h4 ref={Csref}>Css</h4>
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
                            <h4>Node</h4>
                            <h4>Express</h4>
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

                    <li ref={SkillsLiG5}>
                        <div>
                            <h4>{lan.proandski.skills.subtitles.soft.skills.cre}</h4>
                            <h4>{lan.proandski.skills.subtitles.soft.skills.team}</h4>
                            <h4>{lan.proandski.skills.subtitles.soft.skills.deci}</h4>
                            <h4>{lan.proandski.skills.subtitles.soft.skills.self}</h4>
                            <h4>{lan.proandski.skills.subtitles.soft.skills.ent}</h4>
                        </div>
                        <h2>{lan.proandski.skills.subtitles.soft.title}</h2>
                    </li>
                </ul>
            </section>
        </article>
    )
}
