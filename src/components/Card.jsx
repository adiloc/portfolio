export default function Card() {
  return (
    <div className="card__box">
      <div className="card__text">
        <h3>Personal Dashboard</h3>
        <p>A Chrome extension to help you focus and stay up-to-date. </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <a target="_blank" href="https://www.google.com">
        <button>Visit Site</button>
        </a>
      </div>
      <img src="./src/assets/tenzies.png"></img>
    </div>
  )
}