import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

// React component can return only ONE element,
// so we use fragment element (<></>) to return <form> + <h1>
// ...currentTodoList will return new array with provided array elements

export default function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(title) {
    setTodoList(currentTodoList => {
      return [
        ...currentTodoList,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }]
    })
  }

  function toggleTodo(id, completed) {
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList 
        todoList={todoList} 
          toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}