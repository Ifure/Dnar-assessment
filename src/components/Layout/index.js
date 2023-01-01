import React from "react";
// import { Navbar } from "../Navs/Navbar";

import Sidenav from "../Navs/Sidenav";

const Layout = ({ children }) => {
	return (
		<>
			<div className='w-full flex py-5 px-2 md:px-8 bg-purple-dark'>
				<aside className='hidden xl:block w-[102px] h-screen'>
					<Sidenav />
				</aside>
				<section
					className={`w-full xl:w-[calc(100%-102px)] md:pl-8  } h-[100%] `}>
					<main className={`min-w-[calc(100%-102px)] }`}>{children}</main>
				</section>
			</div>
		</>
	);
};

export default Layout;
