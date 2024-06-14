import React from "react";
import "./SelectorMultiple.css";

const SelectorMultiple = ({ options, selectedValues, onChange }) => {
  const handleSelect = (option) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];
    onChange(newSelectedValues);
  };

  return (
    <div className="selector-multiple-container">
      {options.map((option) => (
        <label key={option} className="selector-multiple-label">
          <input
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => handleSelect(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SelectorMultiple;
