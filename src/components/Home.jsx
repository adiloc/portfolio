import Skills from './Skills'
import { icons } from '/src/data.js'

export default function Home(props) {

  const iconsSkills = icons.map(el => (
    <Skills 
        el={el}
        key={el.id}
    />
  ))

  return (
    <div className="home" ref={props.home}>
      <h1>Adrian Dumitrascu</h1>
      <h3>A Front-End <span>Developer
        </span> based in <span>Frankfurt</span>, Germany</h3>
      <div className="flex__container">
        {iconsSkills}
      </div>
    </div>
  )
}