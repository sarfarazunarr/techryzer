"use client";
import React, { useState } from 'react';

const CustomDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-40 p-2 border border-gray-300 rounded-md bg-transparent shadow-sm focus:outline-none text-white focus:ring-2 focus:ring-primary-500"
      >
        {selected}
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-gray-800 z-10">
          <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <li 
                key={index} 
                onClick={() => handleOptionClick(option)} 
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-200 hover:bg-primary-600 hover:text-white"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
