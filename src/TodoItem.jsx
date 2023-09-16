export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    onChange={event => toggleTodo(id, event.target.checked)}
                    checked={completed}
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}