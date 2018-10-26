import React, { useState, useEffect } from 'react'

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
    document.title = `😄 ${todos[todos.length - 1].text} 😄`
  })

  return (
    <div>
      <form onSubmit={handleOnAddTask}>
        <input placeholder='text' type='text' name='text' id='text' />
      </form>
      <ul>
        {todos.map(todo => <li key={todo.text}> {todo.text} 😄 </li>)}
      </ul>
    </div>
  )
}

export default ToDoList
