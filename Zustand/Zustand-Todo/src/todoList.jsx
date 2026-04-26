import useTodoStore from "./store/useTodoStore";

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
