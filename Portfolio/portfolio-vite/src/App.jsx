import "./styles.css"
import "./animations.css"
import "./responsive.css"
import { Background } from './Components/Back'
import { Nav } from './Components/Headind'
import { About } from './Components/AboutMe'
import { Skills } from './Components/Known'



function App() {


  return (
    <>
      <Background />
      <Nav />
      <div id='PortInfo'>
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
