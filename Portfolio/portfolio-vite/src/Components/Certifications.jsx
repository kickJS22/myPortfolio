import { useContext } from "react";
import { LanThContext } from "../Context/ContextProvider";

export function Cert() {
    const {lan} = useContext(LanThContext)
    return (
        <div id="cert">
            <h1>{lan.cert.subtitle}</h1>
            <ul id="certCont">
                <a href="https://skillsforall.com/career-path/cybersecurity?courseLang=en-US" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/cisco.png" alt="ciscoIcon.png" />
                        <h2>{lan.cert.certArray.cisco}</h2>

                    </li>

                </a>
                <a href="https://www.cambridgeenglish.org/es/exams-and-tests/first/" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/cambridge.png" alt="cambridgeIcon.png" />
                        <h2>{lan.cert.certArray.first}</h2>

                    </li>
                </a>
                <a href="https://www.sololearn.com/certificates/CT-G5LIOR9J" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/sololearn.png" alt="sololearnIcon.png" />
                        <h2>{lan.cert.certArray.solo}</h2>

                    </li>
                </a>
                <a href="https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/harvard.png" alt="harvardIcon.png" />
                        <h2>{lan.cert.certArray.harv}</h2>
                    </li>
                </a>
                <a href="https://youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&si=E2493eP9YsWmtk5k" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/nodejs.png" alt="nodejsIcon.png" />
                        <h2>{lan.cert.certArray.node}</h2>
                    </li>
                </a>
                <a href="https://www.youtube.com/watch?v=rLoWMU4L_qE" target="_blank">
                    <li className="certEle">
                        <img src="certPhotos/reactjs.png" alt="reactjsIcon.png" />
                        <h2>{lan.cert.certArray.react}</h2>
                    </li>
                </a>
            </ul>
        </div>
    )
}