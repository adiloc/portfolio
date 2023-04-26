export default function Nav(props) {
  const {about, work} = props
  return (
    <div className="nav fade">
      <button onClick={() => props.handle(about)}>About</button>
      <button onClick={() => props.handle(work)}>Work</button>
    </div>
  )
}