import React from 'react'
import Daily from './Daily'
import Featured from './Featured'

const DailyShop: React.FC = () => {
	return (
		<>
			<section className='text-gray-700 body-font'>
				<Daily />
				<Featured />
			</section>
		</>
	)
}

export default DailyShop
