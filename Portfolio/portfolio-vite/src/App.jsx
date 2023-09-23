import './Styles.css'
import "./Animations.css"
import "./responsive.css"
import { Background } from './Components/Back'
import { Nav } from './Components/Headind'
import { About } from './Components/AboutMe'
import { Skills } from './Components/Known'
import { ContactInfo } from './Components/Contact'

function App() {
  

  return (
    <>
      <Background />
      <Nav />
      <div id='PortInfo'>
        <About />
        <Skills />
        <ContactInfo />
      </div>
    </>
  )
}

export default App
