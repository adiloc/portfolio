export default function About(props) {
  return (
     <div className="about" ref={props.about}>
        <h2>About Me</h2>
        <p>I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.</p>
        <button>My Resume</button>
     </div>
  )
}