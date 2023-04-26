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
      <h1>Work</h1>
      {cards}
     </div>
  )
}
