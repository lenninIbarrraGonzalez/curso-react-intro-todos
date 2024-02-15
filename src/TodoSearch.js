import "./css/TodoSearch.css";
function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      placeholder="buscar"
      onChange={(event) => {
        console.info("Escribiste en el input");
        console.info("event", event);
        console.info("event", event.target);
        console.info("event target value", event.target.value);
      }}
    />
  );
}

export { TodoSearch };
