import Skills from './Skills'
import { icons } from '/src/data.js'


export default function About(props) {

  const iconsSkills = icons.map(el => (
      <Skills 
          el={el}
          key={el.id}
      />
  ))

  return (
     <div className="about" ref={props.about}>
      <div className="intro">
        <h1>Adrian Dumitrascu</h1>
        <h2>A Front-End Developer based in Frankfurt, DE</h2>
        <div className="flex__container">
          {iconsSkills}
        </div>
        <button>Engage</button>
      </div>
     </div>
  )
}