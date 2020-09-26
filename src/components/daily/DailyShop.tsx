import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Daily from './Daily'
import Featured from './Featured'
import SpecialDaily from './SpecialDaily'
import SpecialFeatured from './SpecialFeatured'

const DailyShop: React.FC = () => {
	const apiContext = useContext(ApiContext)
	const { getDailyShop } = apiContext

	useEffect(() => {
		getDailyShop()
	}, [])

	return (
		<>
			<section className='text-gray-700 body-font'>
				<Daily />
				<SpecialDaily />
				<Featured />
				<SpecialFeatured />
			</section>
		</>
	)
}

export default DailyShop
