import React from "react";
import "./css/TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="buscar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        // console.info("Escribiste en el input");
        // console.info("event", event);
        // console.info("event", event.target);
        // console.info("event target value", event.target.value);
      }}
    />
  );
}

export { TodoSearch };
