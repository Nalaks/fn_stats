export enum ContextTypes {
	GET_NEWS = 'GET_NEWS',
	GET_DAILY_SHOP = 'GET_DAILY_SHOP',
	GET_FEATURED_SHOP = 'GET_FEATURED_SHOP'
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
		case ContextTypes.GET_FEATURED_SHOP:
			return {
				...state,
				featuredShop: action.payload
			}
		default:
			return state
	}
}
