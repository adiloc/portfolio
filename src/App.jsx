import { useState, useRef, useEffect } from 'react'
import About from "./component/About"
import Work from "./component/Work"
import Services from "./component/Services"
import './App.css'

function App() {

  const [about, setAbout] = useState(useRef(null))
  const [services, setServices] = useState(useRef(null))
  const [work, setWork] = useState(useRef(null))

  function handle(ref){
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
 
  return (
    
    <div>
      <div className="nav">
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
    </div>
  )
}

export default App


