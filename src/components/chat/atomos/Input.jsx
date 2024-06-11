import React from "react";
import "./Input.css";

const Input = ({ value, onChange, placeholder, disabled }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="entrada-chat"
    />
  );
};

export default Input;
