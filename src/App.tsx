import React from 'react'
import { ApiState } from './context/ApiContext'
import Routing from './Routing'

const App: React.FC = () => {
	return (
		<ApiState>
			<Routing />
		</ApiState>
	)
}

export default App
