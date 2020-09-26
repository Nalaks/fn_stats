import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import './DailyShop.css'
import vbucks from '../../assets/images/icon_vbucks.png'

const Daily: React.FC = () => {
	const apiContext = useContext(ApiContext)
	const { dailyShop } = apiContext

	return (
		<div className='container px-5 pt-16 mx-auto'>
			<div className='lg:w-1/2 w-full mb-6'>
				<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
					Daily Items
				</h1>
				<div className='h-1 w-20 bg-indigo-500 rounded'></div>
			</div>
			<div className='flex flex-wrap -m-4'>
				{dailyShop ? (
					dailyShop.daily.entries.map((item) => (
						<div
							className='lg:w-1/4 md:w-1/2 p-4 w-full'
							key={item.offerId}>
							<a
								className={
									'block relative h-48 rounded overflow-hidden bg-' +
									item.items[0].rarity.value
								}>
								<img
									alt={item.items[0].name}
									className='object-contain object-center w-full h-full block border-solid border-8 border-black'
									src={
										item.bundle
											? item.bundle.image
											: item.items[0].images.icon
									}
								/>
							</a>
							<div className='mt-4'>
								<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
									{item.items[0].type.displayValue}
								</h3>
								<h2 className='text-gray-900 title-font text-lg font-medium'>
									{item.bundle
										? item.bundle.name
										: item.items[0].name}
								</h2>
								<p className='mt-1'>
									<img
										alt='vbucks'
										className='inline-block h-6 w-6 mr-1'
										src={vbucks}
									/>
									{item.finalPrice}
								</p>
							</div>
						</div>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default Daily
