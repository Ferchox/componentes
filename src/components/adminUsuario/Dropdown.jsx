import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onChange, placeholder, labelKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
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
