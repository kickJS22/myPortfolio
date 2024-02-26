import { useContext, useRef } from "react"
import { LanThContext } from "../Context/ContextProvider"


export function ResHead() {

    const { lan, switchLanRefRes, getAndChangeLanRes, changeThemeRes, switchThemeRefRes } = useContext(LanThContext)
    return (
        <section id="resHeading">
            <button id="resHeadBut" onClick={() => { startAnim() }}><img src="BG/menu.svg" alt="" /></button>
            <ul id="resHeadingCont">
                <a className="resAnchor" href="#mainText">{lan.contact.title}</a>
                <a className="resAnchor" href="#about">{lan.about.title}</a>
                <a className="resAnchor" href="#cert">{lan.cert.title}</a>
                <a className="resAnchor" href="#proAndSkiCont">{lan.proandski.projects.title}</a>
                <a className="resAnchor" href="#experience">{lan.exp.title}</a>

                <span id="langRes" ref={switchLanRefRes}>
                    <button className="resBut" onClick={() => { getAndChangeLanRes() }}></button>
                </span>
                <span id="themeRes" ref={switchThemeRefRes}>
                    <button className="resBut" onClick={() => { changeThemeRes() }}></button>
                </span>
            </ul>
        </section>
    )
}

function startAnim(e){
    let menu = document.querySelector("#resHeadingCont")
    menu.style.animationName="resDown"
    // console.log("pressed resDown : ", menu.style.animationName)
    
    document.addEventListener("click", (e)=>{
        if(e.target.parentElement.id != "resHeadBut"){
            // console.log("another Button")
            menu.style.animationName="resUp"
        }
    })
    
}