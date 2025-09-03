import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './Components/TodoItems';

const App = () => {

  // const[task,setTask] = useState("");
  const[todoList,setTodoList] = useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")): []); //empty array

  const inputRef = useRef();
  const add = () =>{
    const inputText = inputRef.current.value.trim();

    if(inputText==="") return null;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo; 
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

return (
  <div className='bg-stone-900 grid py-4 min-h-screen'>
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-amber-800 ml-'>To-Do List!</h1>
      </div>

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          placeholder='Add your task!'
          type='text'      
        />
        <button onClick={add}
          className='border-none rounded-full bg-orange-600 w-30 h-14 text-white font-bold text-lg cursor-pointer hover:bg-orange-500'
          > Add +
        </button>
      </div>

      <div>
        {todoList.map((item,index) => {
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}
          deleteTodo={deleteTodo} toggle={toggle}/>
        })}
      </div>

      </div>
    </div>
  )
}

export default App
