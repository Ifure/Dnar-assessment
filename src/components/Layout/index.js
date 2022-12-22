import React from "react";
import Events from "../dashboard/Overview/Events";
import Sidenav from "../Navs/Sidenav";


const Layout = ({ children }) => {
  return (
		<div className="w-full max-w-full mx-auto relative bg-purple-dark">
		<div className="w-full flex border">
			<div className=" w-full md:w-1/12 max-w-1/12 border border-black h-screen  ">
				<Sidenav />
			</div>
			<div className="w-full md:w-8/12 max-w-8/12 bg-gray-00 border border-green-600">{children}</div>
			<div  className="w-full md:w-3/12 max-w-3/12 bg-gray-00"><Events/></div>
		</div>
	</div>
    
  );
};

export default Layout;
