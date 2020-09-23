import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'

const News: React.FC = () => {
	const apiContext = useContext(ApiContext)
	const { getNews, news } = apiContext

	useEffect(() => {
		getNews()
	}, [])

	return (
		<>
			<section className='text-gray-700 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
						{news ? (
							news.slice(0, 3).map((item: INewsItem) => (
								<div
									className='p-4 md:w-1/3 sm:mb-0 mb-6'
									key={item.id}>
									<div className='rounded-lg h-64 overflow-hidden'>
										<img
											alt='content'
											className='object-cover object-center h-full w-full'
											src={item.image}
										/>
									</div>
									<h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
										{item.title}
									</h2>
									<p className='text-base leading-relaxed mt-2'>
										{item.body}
									</p>
								</div>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	)
}

export default News
