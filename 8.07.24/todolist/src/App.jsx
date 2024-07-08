import styles from "./App.module.css";
import { useState } from "react";

const initialTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Fare la spesa",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Pagare bolletta",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.length) return;

    const id = self.crypto.randomUUID();
    const title = input;
    setTodos([...todos, { id, title }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (e) => {
    const newList = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newList);
  };

  return (
    <div className={styles.gifContainer}>
    <img 
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTBmdWpobGlucXNlcm5ibTdlNDczbDFibDc2bTA1eWhhY25yZTdqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8HcT5UwUTT0XtlIvmc/giphy.webp" 
      alt="Example GIF" 
      className={styles.gif}
    />
    <div className={styles.container}>
      <input 
        value={input} 
        placeholder="What's up for today?" 
        onChange={handleChange} 
      />
      <button onClick={addTodo}>Add Your To Do</button>
      <div className={styles.container__list}>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button id={todo.id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
