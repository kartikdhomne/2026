import TodoInput from "./todoInput";
import TodoList from "./todoList";

function App() {
  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Todo App (Zustand)</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
