import React from "react";
import Exchange from "./Exchange";
import Rank from "./Rank";

const Others = () => {
	return (
		<div className='md:flex  justify-between gap-4 mt-6 items-end '>
			<Exchange />
			<Rank />
		</div>
	);
};

export default Others;
