export enum ContextTypes {
	GET_NEWS = 'GET_NEWS',
	GET_DAILY_SHOP = 'GET_DAILY_SHOP',
	GET_FEATURED_SHOP = 'GET_FEATURED_SHOP',
	GET_ALL_COSMETICS = 'GET_ALL_COSMETICS'
}

export default (state: IState, action: any) => {
	switch (action.type) {
		case ContextTypes.GET_NEWS:
			return {
				...state,
				news: action.payload
			}
		case ContextTypes.GET_DAILY_SHOP:
			return {
				...state,
				dailyShop: action.payload
			}
		case ContextTypes.GET_ALL_COSMETICS:
			return {
				...state,
				allCosmetics: action.payload
			}
		default:
			return state
	}
}
