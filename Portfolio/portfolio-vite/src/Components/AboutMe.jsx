import { useRef, useEffect } from "react";
import { ObserverFunctionallity } from "./Observer";
export function About() {
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
            <h1 ref={h1Ref}>HI I'M JUAN 🖐️,</h1>
            <div>
                <p ref={pRef}> A junior software developer oriented to create web applications, also highly interested in graphic design.<br></br>
                    Comfortable in the utilization of <span>JavaScript</span> and <span>Python</span>, and a basic understanding of backend with Node.<br></br>
                    My professional objective is learning the maximum that i can of my first experiences.
                </p>
                <img ref={imgRef} src="../../public/perfil.jpg" alt="" />
            </div>
            <a ref={aRef} href="../../public/CV's/English-CV.pdf" target="_blank" rel="noopener noreferrer" download={"Juan_Ignacio_Bustillos_CV.pdf"}>DOWNLOAD CV</a>
        </section>
    )
}

