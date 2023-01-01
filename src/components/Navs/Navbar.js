import React from 'react'
import {  GiHamburgerMenu} from "react-icons/gi";

export const Navbar = () => {
  return (
    <nav className='w-full  md:hidden bg-purple-light sm:px-10 shadow-md'>
        <ul className=' space-y-3 '>
        <li className='w-full p-3  flex justify-end items-center  text-xl'>
            <i className='text-white text-3xl'><GiHamburgerMenu/></i>
        </li>
        {/* <li  className='w-full p-5 rounded  flex justify-center items-center text-xl bg-purple-mid  '>
         <i className='text-white text-3xl'>
          <GiHamburgerMenu className='gi ' />
          </i>
        </li>
        <li  className='w-full p-5 rounded flex justify-center items-center  text-xl bg-purple-mid  '>
        <i className='text-white text-3xl' ><GiHamburgerMenu className='gi' /></i>
        </li> */}
      </ul>
    </nav>
  )
}
