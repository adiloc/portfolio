import './About.css'

export default function About(props) {
  return (
     <div className="about" ref={props.about}>
      <div className="intro">
        <h1>Adrian Dumitrascu</h1>
        <h2>A Front-End Developer based in London, UK</h2>
        </div>
     </div>
  )
}