export default function Card(props) {
  const {name, description, tool, image, path, id} = props.el

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
        <a target="_blank" href={path}>
        <button>Visit Site</button>
        </a>
      </div>
      <img src={image}></img>
    </div>
  )
}