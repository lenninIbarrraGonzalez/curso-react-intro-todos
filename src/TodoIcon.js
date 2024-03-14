import React from "react";
//permite impotar los iconos, utilizamos los alias
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
// import "./css/TodoCounter.css";
import "./css/TodoIcon.css";

//tipos de iconos que podemos tener
const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {/* condicionales reducidos */}
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
