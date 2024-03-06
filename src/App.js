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
  { text: "IR A CINE CON SATANAS", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.info("Los usuarios estan buscando:", searchValue);
  const [todos, setTodos] = React.useState(defaultTodos);

  //Estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  //funcion para marcar un TODO completado
  const completeTodo = (text) => {
    //creo un nuevo array con lo que tiene todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    //accedo por el indice al todo que quiero modifica
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  //Encapsulamos la funcion dentro de otra funcion
  // onComplete={() => completeTodo(todo.text)}

  const ondeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // newTodos[todoIndex].completed = false;
    //elimiar con splice ubico el indice y elimino el numero de items a borrar
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => ondeleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
