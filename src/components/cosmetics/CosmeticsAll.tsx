import React, { useContext, useEffect } from 'react'
import svg from '../../assets/images/search.svg'
import { ApiContext } from '../../context/ApiContext'

const CosmeticsAll: React.FC = () => {
	const apiContext = useContext(ApiContext)
	const { allCosmetics, getAllCosmetics } = apiContext
	console.log(allCosmetics.slice(0, 2))

	useEffect(() => {
		getAllCosmetics()
	}, [])

	return (
		<section className='text-gray-700 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col items-center text-center w-full mb-20'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						Fortnite: All Cosmetics
					</h1>
					<div className='p-8 lg:w-2/4 sm:w-3/4'>
						<div className='bg-white flex items-center rounded-full shadow-lg'>
							<input
								className='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
								id='search'
								type='text'
								placeholder='Search for an item...'
							/>

							<div className='p-4'>
								<button className='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center'>
									<img src={svg} alt='search-icon' />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap -m-4'>
					{allCosmetics ? (
						allCosmetics.slice(0, 10).map((item) => (
							<div className='lg:w-1/8 sm:w-1/4 p-2' key={item.id}>
								<div className='flex relative'>
									<img
										alt={item.name}
										className='absolute inset-0 w-full h-full object-cover object-center'
										src={item.images.icon}
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											{item.name}
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Shooting Stars
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha
											leggings jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</section>
	)
}

export default CosmeticsAll
