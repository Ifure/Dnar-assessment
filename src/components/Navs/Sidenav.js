import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div className='h-screen fixed top-0 '>
			<i className='text-blue-mid flex bg-purple-mid my-5 py-4 rounded-2xl justify-center text-3xl'>
				<GiHamburgerMenu className='gi ' />
			</i>
			<ul className='p-4 space-y-3 h-[100vh] pt-6 flex flex-col rounded-3xl items-center bg-purple-mid'>
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
	);
};

export default Sidenav;
