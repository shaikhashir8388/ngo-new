// src/components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label htmlFor="options" className="block text-sm font-medium text-gray-700">
        
      </label>
      <select
        id="options"
        name="options"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Our Impact </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
