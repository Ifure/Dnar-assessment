import React from "react";

const Events = () => {
	return (
		<aside className='rounded-3xl text-white px-1 h-screen mt-6 md:mt-0  bg-purple-mid '>
			<ul className=' space-y-4'>
				<h1 className='font-bold text-4xl  py-10 px-8'>Events</h1>
				<li className='bg-purple-light rounded-2xl cursor-pointer  px-5 flex flex-col justify-between'>
					<h4 className='font-bold text-lg py-4 '>Token2049 London</h4>
					<p className='pb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					</p>
					<div className='flex  items-end justify-end p-5'>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABd0lEQVR4nO2WsU7CUBSGv8luAhprLMpb+CAmogMLDwAOvqEuYFQ0wQFIiIObOgmTDJib/CQ3zS0p9NSJP7kJLSfn7zn33K+FnbZXBHSBPjDX6uteREk6BV6BZcZ6AerWpg1gKoMRcAHsAwnQBMaeuVnlZ56pa2s1EFPzzDsWppHXXmdaWRPb9OIK60bJ3jMq9ZUo9sfC+EHJXDX8p/FMyQ51HQPPwF0g9kqxPQvjLyU7kulQ164Tvtw2TCyH617JboE3/R7qIVaqaKCWwMDqOLVTkEib1jzTqY6eidzA/AZMj4EW8OGZNoqw91vtbct0GDC9BhZeFwbCqRl7Q5WeA596yJ4Gac+CvQfqQNaelsbeeM30lsbeOGNPXXvN2DsKsPcxY5Dcnpqx9zLwnxuWp9SRWViz9yRHbMuSvbOcxjUPDibs7ed4zZXC3q4SjlVVWtWy2Bvpg2xl3hQaE71PJ9uyN4/qnnlobczeTSvvaGLnRdi7E57+APHIojLsmNzxAAAAAElFTkSuQmCC'
							alt='icon'
						/>
					</div>
				</li>
			</ul>
		</aside>
	);
};

export default Events;
