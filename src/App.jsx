import { useState } from "react";
import "./App.css";
import SimpleTodo from "./components/SimpleTodo";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

function App() {
  const [TodosList, setTodosList] = useState(initialTodosList);

  const onTodo = (id) => {
    let filterTodo = TodosList.filter((eachTodo) => eachTodo.id !== id);
    setTodosList(filterTodo);
  };

  return (
    <>
      <div className="app-container">
        <h1>Simple Todo</h1>
        <ul className="todo-container">
          {TodosList.map((eachTodo) => (
            <SimpleTodo todoList={eachTodo} key={eachTodo.id} onTodo={onTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
