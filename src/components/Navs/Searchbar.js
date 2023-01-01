
import DatePicker from "react-datepicker";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// import {  GiSearch} from "react-icons/gi";
const SearchBar = ({ showSearchBar = false, setSearchTerm, searchTerm }) => {
	const [toggle, setToggle] = useState(false)
	const location = useLocation();
	return (
		<nav
			className={`${showSearchBar ? "w-full" : "w-11/12"
				} pb-10  flex items-center sm:space-x-8 space-x-8`}>
			<input
				type='text'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				placeholder='search'
				className={`${showSearchBar ? " md:w-[700px]" : "w-full "
					}  p-4 max-w-4/6 border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg `}
			/>
			{showSearchBar && (
				<div className='w-[200px] bg-purple-mid flex '>
					<DatePicker
						value='Nov 2020 - July 2021'
						placeholderText='Nov-July 2021'
						className='w-full p-4 border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg '
					/>
					{/* <input type='date' className='w-full p-4 border text-white block shadow-sm focus:outline-none focus:border-purple-light border-gray-800 bg-transparent rounded-lg '/> */}
				</div>
			)}

			<i className='text-white cusor-pointer lg:hidden text-3xl' onClick={()=> setToggle(!toggle)}>
				<GiHamburgerMenu className='gi' />
			</i>

			<aside
				className={`p-5 lg:hidden top-0 right-0 bg-black text-gray-80  w-full fixed h-screen ease-in-out duration-300  z-50 ${toggle ? "translate-x-0 " : "translate-x-full "
					}`}
			>
				<div>
					<div onClick={()=> setToggle(!toggle)} className="lg:hidden">
						<button className="absolute  top-0 right-0 mt-5 px-7">
							<svg
								className="w-10 h-10 "
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="#BCC3DC"
							>
								<path d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>

					<ul className="w-full mt-14" onClick={() => setToggle(toggle)}>
					<li
					className={`${
						location.pathname === "/" &&
						"text-blue-mid bg-blue-600  p-2 my-2 rounded-2xl"
					}   flex justify-center items-center`}>
					<Link to='/'>
						<i className='text-white text-3xl'>
							<GiHamburgerMenu className='gi' />
						</i>
					</Link>
				</li>

				<li
					className={`${
						location.pathname === "/dashboard" &&
						"text-blue-mid bg-blue-600  p-2 my-2 rounded-2xl"
					}   flex justify-center items-center`}>
					<Link to='/dashboard'>
						<i className='text-white text-3xl'>
							<GiHamburgerMenu className='gi' />
						</i>
					</Link>
				</li>
					</ul>
				</div>
			</aside>
		</nav>
	);
};

export default SearchBar;
