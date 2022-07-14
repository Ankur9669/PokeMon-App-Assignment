import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./buttons.css";

const Button = (props) => {
  const { buttonText, onClick = () => {}, isLoading = false } = props;
  return (
    <button onClick={onClick} className="button">
      {isLoading ? (
        <div className="button-loader">
          <ThreeDots
            color={"var(--navbar-color)"}
            width={"50px"}
            height={"20px"}
          />
        </div>
      ) : (
        <>{buttonText}</>
      )}
    </button>
  );
};

export default Button;
