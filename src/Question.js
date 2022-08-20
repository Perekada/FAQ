import React, { useState } from 'react'
import {HiPlus,HiMinus} from 'react-icons/hi'
// const Question = (questions) => {
//     const{id,title,info} = questions
//     console.log(title)
//   return (
//     <article className='container'>
//       <h1>{title}</h1>
//       <h4>{info}</h4>
//     </article>
//   );
  const Question = (props) => {
    const {id, title, info} = props.question
    const [showInfo, setShowInfo] = useState(false)
    console.log(id);
    function Information(){
      if (showInfo === true) {
        return <>{info}</>
      }
      return null
    }
    return <article>
      <div className='question'>
        <header>
        <h4>{title}</h4>
        <button onClick={()=>{setShowInfo(!showInfo)}} className='btn'>{showInfo?<HiMinus/>:<HiPlus/>}</button>
        </header>
        <p>{Information()}</p>
      </div>
    </article>
  
};

export default Question
