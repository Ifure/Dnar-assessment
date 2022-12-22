import React from 'react'

const MktLeaders = () => {
  return (
    <section className='w-4/6 max-w-4/6 p-3 rounded-md text-white h-128 overflow-auto ml-10 sm:ml-16 py-10  bg-purple-mid '>
			
			<ul className='w-full px-4 space-y-4'>
			<h1 className='text-4xl mb-2 font-bold'>
				Market Leaders
			</h1>
				<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex justify-between'>
					<p className='font-bold text-lg '>Bitcoin(BTC)</p>
					<p className='text-2xl font-bold'>$17,666</p>
				</li>
				<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex justify-between'>
					<p className='font-bold text-lg '>Bitcoin(BTC)</p>
					<p className='text-2xl font-bold'>$17,666</p>
				</li>
				<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex justify-between'>
					<p className='font-bold text-lg '>Bitcoin(BTC)</p>
					<p className='text-2xl font-bold'>$17,666</p>
				</li>
				<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex justify-between'>
					<p className='font-bold text-lg '>Bitcoin(BTC)</p>
					<p className='text-2xl font-bold'>$17,666</p>
				</li>
				
			</ul>
    </section>
  )
}

export default MktLeaders