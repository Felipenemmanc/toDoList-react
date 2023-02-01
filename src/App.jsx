import { useState } from "react";
import { ToDoPage } from "./assets/pages/TodoPage/ToDoPage";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <ToDoPage toDoList={toDoList} />
    </div>
  );
}

export default App;
