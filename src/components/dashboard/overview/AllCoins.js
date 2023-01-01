import React from "react";
import { useGetCryptosQuery } from "../../../services/api";

const AllCoins = () => {
	const { data, error, isFetching } = useGetCryptosQuery();

	return (
		<section className='w-full  p-3 rounded-3xl text-white mt-10  py-10  bg-purple-mid '>
			<h2 className='text-3xl px-4 font-bold'>All Coins</h2>
			<ul className='p-5 md:grid md:grid-cols-4 space-y-3 md:space-y-0 gap-4 md:m-0 '>
				{data &&
					Object.entries(data).map(([key, value], i) =>
						i < 30 ? (
							<React.Fragment key={key}>
								<li className='flex items-center  justify-center bg-purple-light px-4 py-5 rounded-md '>
									<p>
										{value.name} ({value.symbol})
									</p>
								</li>
							</React.Fragment>
						) : (
							""
						)
					)}
			</ul>
			{isFetching && (
				<h2 className='text-3xl text-center'>Data is isFetching</h2>
			)}
			{error && <div className='text-red-800'>{error.message}</div>}
		</section>
	);
};

export default AllCoins;
