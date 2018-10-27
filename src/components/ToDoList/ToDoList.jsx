import React, { useState, useEffect } from 'react'
import './ToDoList.scss'

const ToDoList = () => {
  let id = 0
  const [todos, setTodos] = useState([{ text: 'Learn hooks', id }])

  const handleOnAddTask = e => {
    let form = e.target
    e.preventDefault()
    setTodos(todos.concat({ text: form.text.value, id: ++id }))
    form.reset()
  }

  useEffect(() => {
    document.title = `${todos[todos.length - 1].text} 😄`
  })

  return (
    <div className='todo'>
      <form className='todo-form' onSubmit={handleOnAddTask}>
        <input
          className='todo-form__input'
          placeholder='text'
          type='text'
          name='text'
          id='text'
          autoComplete='off'
        />
      </form>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li className='todo-list__item' key={todo.text}> 😄 - {todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
