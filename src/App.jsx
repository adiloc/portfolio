import { useState, useRef, useEffect } from 'react'
import About from "./components/About"
import Work from "./components/Work"
import Services from "./components/Services"
import './App.css'

function App() {

  const [about, setAbout] = useState(useRef(null))
  const [services, setServices] = useState(useRef(null))
  const [work, setWork] = useState(useRef(null))

  function handle(ref){
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
 
  return (
    
    <div className="container">
      <div className="nav fade">
        <button onClick={() => handle(about)}>About</button>
        <button onClick={() => handle(services)}>Services</button>
        <button onClick={() => handle(work)}>Work</button>
      </div>
      <About
          about={about}
          />
      <Services
          services={services}
          />
      <Work 
          work={work}
          />
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >Top</button>
    </div>
  )
}

export default App


