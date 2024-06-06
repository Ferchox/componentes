import React, { useState } from "react";
import "./InputFecha.css";

function InputFecha() {
  const [value, setValue] = useState("");

  return (
    <input className="entrada-fecha"
      type="date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      min={new Date().toISOString().split("T")[0]}
      max={
        new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          .toISOString()
          .split("T")[0]
      }
    />
  );
}

export default InputFecha;
