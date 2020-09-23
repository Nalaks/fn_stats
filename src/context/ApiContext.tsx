import { createContext } from 'react'
import React, { useReducer } from 'react'
import axios from 'axios'
import ApiReducer, { ContextTypes } from './ApiReducer'

const ApiContext = createContext<IContext>({} as IContext)

const ApiState = (props: {
	children: React.ReactNode
}): JSX.Element => {
	const initialState: IState = {
		news: [],
		dailyShop: []
	}

	const [state, dispatch] = useReducer(ApiReducer, initialState)

	// get news items from api
	const getNews = async () => {
		await axios('https://fortnite-api.com/v2/news/br').then((res) =>
			dispatch({
				type: ContextTypes.GET_NEWS,
				payload: res.data.data.motds
			})
		)
	}

	const getDailyShop = async () => {
		await axios('https://fortnite-api.com/v2/shop/br').then((res) =>
			dispatch({
				type: ContextTypes.GET_DAILY_SHOP,
				payload: res.data.data.daily.entries
			})
		)
	}

	// // set loading
	// const setLoading = () => dispatch({ type: types.loading })

	// // clear users
	// const clearUsers = () => dispatch({ type: types.clear })

	return (
		<ApiContext.Provider
			value={{
				news: state.news,
				dailyShop: state.dailyShop,
				getNews,
				getDailyShop
			}}>
			{props.children}
		</ApiContext.Provider>
	)
}

export { ApiState, ApiContext }
