import React from "react";

const Button = ({ type, children, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="chat-button"
    >
      {children}
    </button>
  );
};

export default Button;
