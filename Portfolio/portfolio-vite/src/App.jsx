import "./styles.css"
import "./animations.css"
import "./responsive.css"
import { Background } from './Components/Back'
import { Nav } from './Components/Headind'
import { About } from './Components/AboutMe'
import { Skills } from './Components/Known'
import { useContext } from "react";
import { LanThContext } from "./Context/ContextProvider";


function App() {
  const { theme } = useContext(LanThContext)


  return (
    <main data-theme={theme}>
      <Background />
      <Nav />
      <div id='PortInfo'>
        <About />
        <Skills />
      </div>
    </main>
  )
}

export default App
