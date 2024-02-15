import "./css/CreateTodoButton.css";
function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.info("Le dieron click al boton");
        console.info("event", event);
        console.info("event", event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
