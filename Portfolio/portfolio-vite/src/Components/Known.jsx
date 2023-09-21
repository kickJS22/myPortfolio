import { useRef, useEffect } from "react";
import { ObserverFunctionallity } from "./Observer";
export function Skills() {
    const SkillsH1Ref = useRef();
    const SkillsLiG1 = useRef()
    const SkillsLiG2 = useRef()
    const SkillsLiG3 = useRef()
    const SkillsLiG4 = useRef()
    const SkillsLiG5 = useRef()
    useEffect(() => {
        ObserverFunctionallity(SkillsH1Ref);
        ObserverFunctionallity(SkillsLiG1, "1s");
        ObserverFunctionallity(SkillsLiG2, "1.3s");
        ObserverFunctionallity(SkillsLiG3, "1.5s");
        ObserverFunctionallity(SkillsLiG4, "1.7")
        ObserverFunctionallity(SkillsLiG5, "2.1s");
    }, [])
    return (
        <article id="proAndSkiCont" >
            <section id="projects">
                <h1>PROJECTS</h1>
                <div>
                    <h2>1. Vite Calculator</h2>
                    <span>
                        <p>
                            Is a basic calculator app made it with the front-end tooling <a href="https://vitejs.dev/" target="_blank">Vite.js </a>
                            for <a href="https://es.react.dev/" target="_blank">React.js</a>. <br /> In this project i've learnt the usage of React's Hooks,
                            and some CSS styles. The major problem i've faced was properly calculating arithmetic operations. <br /> In the future I plan to
                            expand this application adding functionalities such as square roots or powers <br />
                            <label>July - 2023</label>
                        </p>
                        <img src="ProjectsPhotos/viteCalculator.png" alt="Vite Calculator.png" />

                    </span>
                    <footer>
                        <a href="https://kickjs22.github.io/ViteCalculator/" target="_blank"><img src="iconsSVGS/icons8-enlace-externo-512.svg" alt="" /></a>
                        <a href="https://github.com/kickJS22/ViteCalculator" target="_blank"><img src="iconsSVGS/icons8-github.svg" alt="" /></a>
                    </footer>
                </div>
                <div>
                    <h2>2. Book List</h2>
                    <p></p>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
                <div>
                    <h2>3. Code App</h2>
                    <p></p>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
            </section>

            <section id="skills">
                <h1 id="SkillsH1" ref={SkillsH1Ref}>SKILLS</h1>
                <ul>
                    <li ref={SkillsLiG1}>
                        <div>
                            <h4>React</h4>
                            <h4>JavaScript</h4>
                            <h4>Vite</h4>
                            <h4>Electron</h4>
                            <h4>Html</h4>
                            <h4>Css</h4>
                            <h4>Sass</h4>
                            <h4>Python</h4>
                            <h4>Django</h4>
                        </div>
                        <h2>Front-End</h2>
                    </li>

                    <li ref={SkillsLiG2}>
                        <div>
                            <h4>Node</h4>
                            <h4>Express</h4>
                            <h4>SQLite</h4>
                        </div>
                        <h2>Back-End</h2>
                    </li>

                    <li ref={SkillsLiG3}>
                        <div>
                            <h4>Photoshop</h4>
                            <h4>Premiere Pro</h4>
                            <h4>Illustrator</h4>
                        </div>
                        <h2>Apss</h2>
                    </li>

                    <li ref={SkillsLiG4}>
                        <div>
                            <h4>Spanish</h4>
                            <h4>English</h4>
                        </div>
                        <h2>Languages</h2>
                    </li>

                    <li ref={SkillsLiG5}>
                        <div>
                            <h4>Creativity</h4>
                            <h4>Team-work</h4>
                            <h4>Decision Making</h4>
                            <h4>Self Learning</h4>
                            <h4>Enthusiasm</h4>
                        </div>
                        <h2>Soft-Skills</h2>
                    </li>
                </ul>
            </section>
        </article>
    )
}