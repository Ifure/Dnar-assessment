import React from "react";

const MktLeaders = ({ singleCryptoData, isLoading }) => {
	console.log({singleCryptoData})
	return (
		<section className='w-full h-128 overflow-auto p-3 rounded-3xl text-white   py-10  bg-purple-mid '>
			<ul className='w-full px-2 space-y-4'>
				<h1 className='text-4xl mb-2 font-bold'>Market Leaders</h1>

				{singleCryptoData &&
					Object.entries(singleCryptoData.coins).map(([key, value], i) =>
						i < 20 ? (
							<React.Fragment key={key}>
								<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex justify-between'>
									<p className='font-bold text-lg '>
										{value.name}({value.symbol})
									</p>
									<p className='text-2xl font-bold'>$17,666</p>
								</li>
							</React.Fragment>
						) : (
							""
						)
					)}
			</ul>
			{isLoading && (
				<h2 className='text-3xl text-center'>Loading Market Leaders</h2>
			)}
		</section>
	);
};

export default MktLeaders;
