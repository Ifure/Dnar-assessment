import React, { useState } from "react";
import { useGetSingleCryptoQuery } from "../../../services/api";
import SearchBar from "../../Navs/Searchbar";
import AllCoins from "./AllCoins";
import Events from "./Events";
import MktLeaders from "./MktLeaders";

const Overview = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const { data: singleCryptoData, isLoading } = useGetSingleCryptoQuery(
		searchTerm || ""
	);
	console.log(singleCryptoData);

	return (
		// layout to accomdate both components

		<>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className='md:flex gap-7'>
				<div className='md:w-[70%]'>
					<MktLeaders
						isLoading={isLoading}
						singleCryptoData={singleCryptoData}
					/>
					<AllCoins />
				</div>
				<div className='md:w-[30%]'>
					<Events />
				</div>
			</div>
		</>
	);
};

export default Overview;
