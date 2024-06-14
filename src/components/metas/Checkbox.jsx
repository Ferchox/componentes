import React from "react";
import "./Checkbox.css";

function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
    </div>
  );
}

export default Checkbox;
