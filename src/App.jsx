import { useState } from "react"
import "./styles.css"

// React component can return only ONE element,
// so we use fragment element (<></>) to return <form> + <h1>
// ...currentTodoList will return new array with these elements
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState([
    { 
      id: crypto.randomUUID(), 
      title: "Eat rice with chicken", 
      completed: true 
    }])

  function handleSubmit(e) {
    e.preventDefault()

    setTodoList(currentTodoList => {
      return [
        ...currentTodoList,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }]
    })

    setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item" >New Item</label>
          <input
            value={newItem}
            onChange={event => setNewItem(event.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">ToDo List</h1>

      <ul className="list">
        {todoList.length === 0 && "No ToDo Items"}
        {todoList.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input 
                  type="checkbox" 
                  onChange={event => toggleTodo(todo.id, event.target.checked)}
                  checked={todo.completed}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}