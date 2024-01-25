import "./styles.css"
import "./animations.css"
import "./responsive.css"
import { Nav } from './Components/Headind'
import { About } from './Components/AboutMe'
import { Skills } from './Components/Known'
import { useContext } from "react";
import { LanThContext } from "./Context/ContextProvider";
import { Experience } from "./Components/Experience"
import { Contact } from "./Components/Email"
import { Cert } from "./Components/Certifications"

function App() {
  const { theme } = useContext(LanThContext)
  return (
    <main data-theme={theme}>
      <Nav />
      <div id='PortInfo'>
        <About />
        <Cert />
        <Skills />
        <Experience/>
        <Contact />
      </div>
    </main>
  )
}

export default App
