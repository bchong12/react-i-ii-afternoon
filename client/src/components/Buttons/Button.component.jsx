import React from "react";

import "./Button.component.css";

const Button = (props) => {
  return (
    <button onClick={props.func} className="button">
      {props.title}
    </button>
  );
};

export default Button;
