import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'

const DailyShop: React.FC = () => {
	const apiContext = useContext(ApiContext)
	const { getDailyShop, dailyShop } = apiContext

	useEffect(() => {
		getDailyShop()
	}, [])

	return (
		<div>
			<section className='text-gray-700 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4'>
						{dailyShop ? (
							dailyShop.map((item) => (
								<div
									className='lg:w-1/4 md:w-1/2 p-4 w-full'
									key={item.offerId}>
									<a className='block relative h-48 rounded overflow-hidden bg-black'>
										<img
											alt={item.items[0].name}
											className='object-contain object-center w-full h-full block'
											src={item.items[0].images.icon}
										/>
									</a>
									<div className='mt-4'>
										<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
											{item.items[0].type.displayValue}
										</h3>
										<h2 className='text-gray-900 title-font text-lg font-medium'>
											{item.items[0].name}
										</h2>
										<p className='mt-1'>{item.finalPrice} V-Bucks</p>
									</div>
								</div>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</div>
	)
}

export default DailyShop
