import React from "react";
import { useState } from "react";

const icon = 'fa-solid fa-magnifying-glass'

export default function SearchHeader({ search }) {
  const [valueInput, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
    
  };

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="flex flex-wrap p-5">
      <form className="w-screen flex items-center" onSubmit={handleFormSubmit}>
        <input
          placeholder="Search..."
          className="input flex-grow box-border p-3 pl-12 border-2 rounded-md border-sky-500 focus:bg-slate-200"
          value={valueInput}
          onChange={handleChange}
        />
        {/* <button onClick={handleFormSubmit} className="bg-sky-700 text-white font-medium pb-4 pt-4 pl-20 pr-20 m-2 rounded-md hover:bg-sky-800"> */}
          {/* Search! */}
        {/* </button> */}
      </form>
    </div>
  );
  
}