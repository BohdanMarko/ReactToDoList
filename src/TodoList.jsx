import { TodoItem } from "./TodoItem.jsx"

export function TodoList({ todoList, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todoList.length === 0 && "No Todo Items"}
            {todoList.map(todo => {
                return (
                    <TodoItem 
                        {...todo} 
                        key={todo.id} 
                        toggleTodo={toggleTodo} 
                        deleteTodo={deleteTodo} 
                    />
                )
            })}
        </ul>
    )
}