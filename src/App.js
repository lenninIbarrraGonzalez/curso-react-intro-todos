import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   { text: "Leer libro Mario Mendoza", completed: true },
//   { text: "Estudiar React", completed: false },
//   { text: "Trabajar jiras de tigo", completed: false },
//   { text: "Pasear a Satanas", completed: true },
//   { text: "IR A CINE CON SATANAS", completed: true },
// ];

// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifiedTodos);
// // localStorage.removeItem('TODOS_V1');

function App() {
  //leemos de localStorage la cadena de caracteres que tiene guardada
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    //parseamos o convertimos a la estructura de datos original
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);

  const [searchValue, setSearchValue] = React.useState("");
  console.info("Los usuarios estan buscando:", searchValue);

  //Estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  //funcion para marcar un TODO completado
  const completeTodo = (text) => {
    //creo un nuevo array con lo que tiene todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    //accedo por el indice al todo que quiero modifica
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //Encapsulamos la funcion dentro de otra funcion
  // onComplete={() => completeTodo(todo.text)}

  const ondeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // newTodos[todoIndex].completed = false;
    //elimiar con splice ubico el indice y elimino el numero de items a borrar
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
