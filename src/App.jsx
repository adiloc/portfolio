import { useState, useRef, lazy } from 'react'
import Work from "./components/Work"
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Pdf from './components/Pdf'
import './App.css'

const About = lazy(() => import('./components/About'))

function App() {

  const [about, setAbout] = useState(useRef(null))
  const [work, setWork] = useState(useRef(null))
  const [home, setHome] = useState(useRef(null))

  function handle(ref){
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  function topBtn() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
 
  function email() {
    window.location = "mailto:adrian.mihai.dumitrascu@gmail.com"
  }

  return (
    <div>
      <Nav 
        handle={handle}
        about={about}
        work={work}
        home={home}
      />
      <div className="container">
        <Home
          home={home}
        />
        <Work 
          work={work}
        />
        <Pdf />
        <About
          about={about}
          btn={email}
        />
      </div>
      <Footer />
      <button className="top__btn" onClick={topBtn}>Top</button>
    </div>
  )
}

export default App


