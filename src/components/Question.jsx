

function Question({ title, info }) {
   
  return (
    <li className="questionContainer">
        <div className="ask">{title}</div>
        <div className="answer">{info}</div>
    </li>
  )
}

export default Question