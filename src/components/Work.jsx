import Card from "./Card"
import { data } from "/src/data.js"

export default function Work(props) {

  const cards = data.map(el => {
    return (
      <Card 
        el={el}
        key={el.id}
      />
    )
  })

  return (
     <div className="work" ref={props.work}>
      <h2>My Work</h2>
      {cards}
     </div>
  )
}
