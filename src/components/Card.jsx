import { AiFillGithub } from 'react-icons/ai'

export default function Card(props) {
  const {name, description, tool, image, site, git, id} = props.el

  const tools = tool.map(el => {
    const keyId = name + el
    return (
        <li key={keyId}>{el}</li>
    )
  })


  return (
    <div className="card__box">
      <div className="card__text">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {tools}
        </ul>
        <div className="card__links">
          <a target="_blank" href={site}>
          <button>Visit Site</button></a>
          <a target="_blank" href={git} title="Wiew Source Code">
          <AiFillGithub className="card__git" />
          </a>
        </div>
      </div>
      <img src={image}></img>
    </div>
  )
}