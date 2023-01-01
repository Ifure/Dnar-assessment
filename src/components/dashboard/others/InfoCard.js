import React from "react";
import redditIcon from "./../../../icons/reddit.svg";

const InfoCard = () => {
	return (
		<aside className='h-[100%] rounded-3xl mt-6 md:mt-0  bg-purple-mid '>
			<div className=' text-white px-1 '>
				<ul className=' space-y-4'>
					<h1 className='font-bold text-4xl  py-10 px-10'>Info Card</h1>
					<li className='bg-purple-light rounded-2xl cursor-pointer  px-10 flex flex-col justify-between'>
						<h4 className='font-bold text-lg py-4 '>Description:</h4>
						<p className='pb-6 px-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</li>
				</ul>
				<div className='flex gap-4 justify-between pt-12 px-8'>
					<div className='inline-flex bg-purple-dark pl-8 px-2 rounded-xl  items-center'>
						website
						<img
							className='px-2 rounded-xl'
							alt='icon'
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJ0lEQVR4nO2WS29NURTHf4kwNfCu2zLznPkOJBIDXAwxMKHqUSF0yHfAREoxoiaiXiNfQKsMREk8KmKAJp6te6+s5LeTneuUe9uSDu4/2ck6+/z3WuestdcDWpiFWAGcAG4Bo8A316h7x4GOmTTYAfQBP4HaX1ZwLgHt0zW6C/ik0h9AVXkQWAusA4bcq8oJ+SOwY6pGD2WGrgH7lOND2jJeyGO+C8515QrQ2azRnRqt+AGBuyo8WcA/5bvbPh/2bKxyo0bjDz6oKBQEFgITrqUFZ5YA48Z4sXtHMg+1N/ffLfwj9AMvlM8YmznezIjVSuANcFXOfeCecuT5W3M+uF2ejbQ6LeeZNn5Dpzd5AfBABRuACx4KXAaeAnOBz8AXYB7wROOBEeCiZ2vqmq/uA0WG10jcAnwHhoFu4CFwTs5eU2QT8A54D2z0Nsc75D42I4YtKpvVHTYKEa4c8Ku7zN3xrAolVw74h1es0ykUqQZUDEN48XlW3ydFn0rOAquzUrgo44y4vxvYo5xCgaGquL9KXTVr+KRIirb7/FJX5zgvp2SxqWahSBjUe4Ft8kN3C7MDbVmTiEJf3ySW/aFJTGRN4mjWJEqNGi9nbS0Zv6OingJ+T5ZmyWhqq3G5msLBLC36s0FgrG4QWF43CNzIBoH9TBFl62396DPk2LMeeFQw+kSotjJNlKy9jQx7EeNevTBjKAHHgJvAa+Cr65V73c1cohb4X/gFe9jKdkVh/G8AAAAASUVORK5CYII='
						/>
					</div>
					<div className='bg-purple-dark rounded-xl p-2'>
						<img
							src={redditIcon}
							alt='redditIcon'
							className='bg-white '
							width={40}
						/>
					</div>
					<div className='bg-blue-600 rounded-xl p-2'>
						<img
							alt='icon'
							width={40}
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII='
						/>
					</div>
				</div>
				<div className='px-8 pt-8'>
					<h4 className=' border-b-2 border-blue-500 py-2 '>Facts</h4>
					<div className='flex justify-between pt-2 pb-4'>
						<h5>Hashing Algorithm</h5>
						<p>SHA-256</p>
					</div>
					<div className='flex justify-between pt-2 pb-5'>
						<h5>Country Origin</h5>
						<p>SHA-256</p>
					</div>
					<div className='flex justify-between pt-2 pb-5'>
						<h5>Categories</h5>
						<p>SHA-256</p>
					</div>
				</div>
			</div>
			<div className='bg-purple-light text-white rounded-2xl m-6 cursor-pointer  px-10 flex flex-col justify-between'>
				<div className='flex justify-between pt-2 pb-4'>
					<h5>Total Supply</h5>
					<p>900000</p>
				</div>
				<div className='flex justify-between pt-2 pb-5'>
					<h5>Max Supply</h5>
					<p>10000</p>
				</div>
				<div className='flex justify-between pt-2 pb-5'>
					<h5>Categories</h5>
					<p>300000</p>
				</div>
			</div>
		</aside>
	);
};

export default InfoCard;
