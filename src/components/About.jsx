import me from "/me.svg"
import Pdf from "./Pdf"

export default function About(props) {

  return (
     <div className="about" ref={props.about}>
         {/* <Pdf /> */}
         <h2>About Me</h2>
         <div className="flex__about">
               {/* <img className="me__img" src={me}/> */}
               <div>
                  <p>I'm a Front-end developer based out of Frankfurt, Germany. I enjoy building  interactive web apps that solve real-world problems and that are delightful to use. My area of expertise consists of React, with a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript(ES6+).
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