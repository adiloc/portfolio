import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa"
import { SiTypescript, SiJavascript } from "react-icons/si"

export default function Skills(props) {
  const {name, id, color} = props.el
  
  const iconsArray = [
    SiJavascript,
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaBootstrap,
    SiTypescript
  ]
  const Icons = iconsArray[id]
  return (
    <div className='icons'>
      <Icons style={{fill: color, height: 60, width: 60}}/>
      <p>{name}</p>
    </div>
  )
}