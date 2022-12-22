import React from 'react'
import {  GiHamburgerMenu} from "react-icons/gi";

const Sidenav = () => {
  return (
    <aside className='flex justify-center w-1/12 max-w-1/12 px-10 py-10 border border-gray-30  md:text-lg  h-screen fixed top-0 left-0  '>
      <ul className=' space-y-3 '>
        <li className='w-full p-3  mb-10  flex justify-center items-center rounded-md text-xl bg-purple-mid  '>
        <i className='text-blue-mid text-3xl'><GiHamburgerMenu  className='gi ' /></i>
        </li>
        <li  className='w-full p-5 rounded  flex justify-center items-center text-xl bg-purple-mid  '>
         <i className='text-white text-3xl'>
          <GiHamburgerMenu className='gi ' />
          </i>
        </li>
        <li  className='w-full p-5 rounded flex justify-center items-center  text-xl bg-purple-mid  '>
        <i className='text-white text-3xl' ><GiHamburgerMenu className='gi' /></i>
        </li>
      </ul>
    </aside>
  )
}

export default Sidenav