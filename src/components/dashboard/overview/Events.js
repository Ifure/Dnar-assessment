import React from 'react'

const Events = () => {
  return (
    <aside className='w-full p-3 rounded-md text-white h-screen max-h-screen overflow-auto py-10 bg-purple-mid '>
			<ul className='w-full px-2 space-y-4'>
                <h1 className='font-bold text-4xl'>Events</h1>
				<li className='bg-purple-light rounded-md cursor-pointer py-8 px-5 flex flex-col justify-between'>
					<h4 className='font-bold text-lg '>Token2049 London</h4>
					<p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</li>
				
			</ul>
    </aside>
  )
}

export default Events