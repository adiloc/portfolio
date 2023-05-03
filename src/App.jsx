import { useState, useRef, useEffect } from 'react'
import About from "./components/About"
import Work from "./components/Work"
import Skills from './components/Skills'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Pdf from './components/Pdf'
import { icons } from './data.js'
import './App.css'



function App() {

  const [about, setAbout] = useState(useRef(null))
  const [work, setWork] = useState(useRef(null))
  const [contact, setContact] = useState(useRef(null))

  const iconsSkills = icons.map(el => (
    <Skills 
        el={el}
        key={el.id}
    />
  ))

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
      />
      <div className="container">
        <div className="intro">
          <h1>Adrian Dumitrascu</h1>
          <h3>A Front-End <span>Developer
            </span> based in <span>Frankfurt</span>, DE</h3>
          <div className="flex__container">
            {iconsSkills}
          </div>
          <button onClick={() => handle(contact)}>Engage</button>
        </div>
        <Work 
          work={work}
        />
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


