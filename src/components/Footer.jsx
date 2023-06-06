import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
  
  const style = {fill: "white", width: 40, height: 40}

  return (
    <div className="footer">
      <a target="_blank" href="https://github.com/adidumitrascu">
      <AiFillGithub style={style} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/adrian-mihai-dumitrascu">
      <AiFillLinkedin style={style} />
      </a>
    </div>
  )
}