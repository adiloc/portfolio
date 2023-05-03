import me from "/me.svg"
import Pdf from "./Pdf"

export default function About(props) {

  return (
     <div className="about" ref={props.about}>
        <h2>About Me</h2>
        <div className="flex__about">
            <img className="me__img" src={me}/>
            <div>
               <p>I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
               </p>
               <div className="about__btn">
                  <button><Pdf /></button>
                  <button onClick={props.btn}>Email</button>
               </div>
            </div>
        </div>
     </div>
  )
}