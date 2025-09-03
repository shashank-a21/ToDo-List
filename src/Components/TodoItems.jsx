import React from 'react'
import tick from '../Assets/tick.jpg'
import not_tick from '../Assets/not_tick.jpg'
import trash from '../Assets/trash.jpg'
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center gap-2 my-3'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete? tick : not_tick} alt="" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
          {text}</p>
      </div>

      <img src={trash} alt="" className='w-7 cursor-pointer' 
      onClick={()=>{deleteTodo(id)}} />
    </div>
  )
}

export default TodoItems