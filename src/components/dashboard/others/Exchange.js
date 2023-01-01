import React from "react";
import "../others/styles/Exchange.scss";

const Exchange = () => {
	return (
		<div className='exchange-contents bg-purple-mid rounded-3xl mb-6 md:mb-0  flex-1 '>
			<h2 className='p-5 px-8'>Exchange</h2>
			<div className='py-8 pl-4'>
				<div className='flex items-center justify-between'>
					<div className=' flex items-center '>
						<div className='text-gray-400 px-6'>sell</div>
						<div className='text-3xl text-white'>6700</div>
					</div>
					<div className='text-white px-6'>
						<div className='flex justify-between pt-2 pb-4'>
							<select class='w-full  outline-none rounded-[5px] bg-purple-dark  py-3 px-4  '>
								<option value='' hidden=''>
									USD
								</option>
								<option value='January'>USD</option>
							</select>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between'>
					<div className=' flex items-center '>
						<div className='text-gray-400 px-6'>Buy</div>
						<div className='text-3xl text-white'>0.609898</div>
					</div>
					<div className='text-white px-6'>
						<div className='flex justify-between pt-2 pb-4'>
							<select class='w-full  outline-none rounded-[5px] bg-purple-dark  py-3 px-4  '>
								<option value='' hidden=''>
									BTC
								</option>
								<option value='January'>BTC</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className='p-5 px-8  text-gray-400'>1 BTC = 8340,43 USD</div>
		</div>
	);
};

export default Exchange;
