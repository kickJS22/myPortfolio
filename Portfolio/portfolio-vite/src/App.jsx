import "./styles.css"
import "./animations.css"
import "./responsive.css"
import { Nav } from './Components/Headind'
import { About } from './Components/AboutMe'
import { Skills } from './Components/Known'
import { useContext } from "react";
import { LanThContext } from "./Context/ContextProvider";
import { Experience } from "./Components/Experience"

function App() {
  const { theme } = useContext(LanThContext)
  return (
    <main data-theme={theme}>
      <Nav />
      <div id='PortInfo'>
        <About />
        <Skills />
        <Experience/>
      </div>
    </main>
  )
}

export default App
