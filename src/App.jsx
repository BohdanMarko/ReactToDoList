import { useState } from "react"
import "./styles.css"

// React component can return only ONE element,
// so we use fragment element (<></>) to return <form> + <h1>
export default function App() {
  const [newItem, setNewItem] = useState("Create React ToDo List")
  
  return (
    <> 
      <form className="new-item-form">
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
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}