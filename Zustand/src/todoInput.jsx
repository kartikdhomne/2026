import { useState } from "react";
import useTodoStore from './store/useTodoStore';

function TodoInput() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
