import { useContext, useEffect, useRef } from "react";
import { ObserverFunctionallity } from "./Functions/Observer";
import { LanThContext } from "../Context/ContextProvider";

export function Experience() {
    const { lan } = useContext(LanThContext)
    const Rref = useRef()
        const Jref = useRef()
        const Href = useRef()
        const Cref = useRef()        
        const Nref = useRef()
        const Sref = useRef()
        const Pref = useRef() 

    useEffect(()=>{
        ObserverFunctionallity(Rref);
        ObserverFunctionallity(Jref);
        ObserverFunctionallity(Href);
        ObserverFunctionallity(Cref);
        ObserverFunctionallity(Nref);
        ObserverFunctionallity(Sref);
        ObserverFunctionallity(Pref);
    },[])

    return(
        <div id="experience">
            <h1>{lan.com.title}</h1>
            <article id="experinceContainer">
                <section ref={Rref}>
                <h3>40%</h3>
                 <h2>React.js</h2>
            </section>

            <section ref={Jref}>
                <h3>60%</h3>
                <h2>Javascript</h2>
            </section>

            <section ref={Href}>
                <h3>70%</h3>
                <h2>HTML</h2>
            </section>

            <section ref={Cref}>
                <h3>60%</h3>
                <h2>CSS</h2>
            </section>

            <section ref={Nref}>
                <h3>50%</h3>
                <h2>Node.js</h2>
            </section>

            <section ref={Sref}>
                <h3>40%</h3>
                <h2>SQLite</h2>
            </section>

            <section ref={Pref}>
                <h3>60%</h3>
                <h2>Photoshop</h2>
            </section>

            </article>
        </div>
    )
}