import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import DailyShop from './components/daily/DailyShop'
import Navbar from './components/header/Navbar'
import News from './components/home/News'

const Routing: React.FC = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/daily'>
						<DailyShop />
					</Route>
					<Route path='/'>
						<News />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default Routing
