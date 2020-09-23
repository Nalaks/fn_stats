import React, { useState } from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
	const [toggle, setToggle] = useState('hidden')
	return (
		<nav className='flex items-center justify-between flex-wrap bg-gradient p-6 shadow-xl'>
			<div className='flex items-center flex-no-shrink text-black mr-6'>
				{/* <svg
					className='h-8 w-8 mr-2'
					width='54'
					height='54'
					viewBox='0 0 54 54'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
				</svg> */}
				<span className='font-semibold text-xl tracking-tight'>
					Fortnite BR News & Stats
				</span>
			</div>
			<div className='block lg:hidden'>
				<button
					className='flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white'
					onClick={() => setToggle(toggle === '' ? 'hidden' : '')}>
					<svg
						className='h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div
				className={
					'w-full block flex-grow lg:flex lg:items-center lg:w-auto ' +
					toggle
				}>
				<div className='text-sm lg:flex-grow'></div>
				<div>
					<div className='text-sm lg:flex-grow'>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-8 text-lg'>
							Home
						</a>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-8 text-lg'>
							Users
						</a>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-8 text-lg'>
							Skins
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
