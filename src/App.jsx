import { useState } from "react";

function App() {
 const [task, setTask] = useState("");
 const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  
  const toggleTask = (index) => {
  const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks); };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mind Control App</h1>

      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}/>

      <button onClick={addTask}>Add</button>

      <ul>
       {tasks.map((t, index) => (
        <li
        key={index}
          onClick={() => toggleTask(index)}
            style={{
              cursor: "pointer",
              textDecoration: t.done ? "line-through" : "none",
            }}>
            {t.text}
          </li>
        ))}
      </ul>
     </div>
  );
}

export default App;


