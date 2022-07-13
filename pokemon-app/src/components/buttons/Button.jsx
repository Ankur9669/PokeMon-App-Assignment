import React from "react";
import "./buttons.css";

const Button = (props) => {
  const { buttonText, onClick = () => {} } = props;
  return (
    <button onClick={onClick} className="button">
      {buttonText}
    </button>
  );
};

export default Button;
