import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {  GiSearch} from "react-icons/gi";
const SearchBar = () => {
  return (
    <nav className='w-11/12 py-10 px-10 sm:px-16  flex items-center space-x-8' >
      <input  type="text" placeholder='search' className='w-4/6 max-w-4/6 p-4  border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg '/>
      <div className='w-2/6 bg-purple-mid flex '>
        <DatePicker
				placeholderText='Nov-July 2021'
          className="w-full p-4 border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg "
        />
        {/* <input type='date' className='w-full p-4 border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg '/> */}
      </div>
    </nav>
  )
}

export default SearchBar