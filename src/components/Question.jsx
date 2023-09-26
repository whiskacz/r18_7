import { useState } from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";

function Question({ title, info }) {
   const [show, setShow] = useState(false)
  return (
    <li className="questionLiContainer">
        <div className='detailContainer'>
            <div className="ask">{title}</div>
            <BsChevronDoubleDown onClick={()=>setShow(!show)}/>
        </div>

        {show && <div className="answer">{info}</div>}
    </li>
  )
}

export default Question