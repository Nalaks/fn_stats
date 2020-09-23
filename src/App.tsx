import React from 'react'
import Navbar from './components/header/Navbar'
import News from './components/home/News'

const App: React.FC = () => {
	return (
		<div>
			<Navbar />
			<News />
		</div>
	)
}

export default App
