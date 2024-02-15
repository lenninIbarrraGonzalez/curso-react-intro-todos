import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Leer libro Mario Mendoza", completed: true },
  { text: "Estudiar React", completed: false },
  { text: "Trabajar jiras de tigo", completed: false },
  { text: "Pasear a Satanas", completed: true },
  { text: "ir a cine", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.info("Los usuarios estan buscando:", searchValue);
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
