import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onChange, placeholder, labelKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={handleToggle}>
        {selectedValue ? selectedValue[labelKey] : placeholder}
        <span className="dropdown-arrow" />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option[labelKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
