import Pdf from "./Pdf"

export default function About(props) {

  return (
     <div className="about" ref={props.about}>
         {/* <Pdf />   */}
         <h2>About Me</h2>
         <div className="flex__about">
               <div>
                  <p>I'm a passionate Front-end Developer based in Bucharest, Romania, specializing in building engaging and high-performance web applications. With a strong foundation in React, Next.js, and TypeScript, along with extensive experience in HTML, CSS, and JavaScript (ES6+), I create solutions that are both functional and user-focused. Additionally, I leverage Node.js for back-end development, ensuring seamless integration across full-stack projects. My goal is to develop web experiences that solve real-world problems while delivering an exceptional user experience.
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