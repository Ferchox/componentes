import React from "react";
import "./SelectorMultiple.css";

const SelectorMultiple = ({ options, selectedValues, onChange }) => {
  const handleSelect = (option) => {
    const newSelectedValues = Array.isArray(selectedValues) && selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : Array.isArray(selectedValues)
        ? [...selectedValues, option]
        : [option];
    onChange(newSelectedValues);
  };

  return (
    <div className="selector-multiple-container">
      {options.map((option) => (
        <label key={option} className="selector-multiple-label">
          <input
            type="checkbox"
            checked={Array.isArray(selectedValues) && selectedValues.includes(option)}
            onChange={() => handleSelect(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SelectorMultiple;
