declare interface INewsItem {
	id: string
	title: string
	image: string
	body: string
}

// declare enum ContextTypes {
// 	GET_USER = 'GET_USER'
// }

declare interface IDailyItem {
	offerId: string
	finalPrice: string
	items: IDetailItem[]
}

declare interface IDetailItem {
	name: string
	type: {
		displayValue: string
	}
	images: {
		icon: string
	}
}

declare interface IState {
	news: INewsItem[]
	dailyShop: IDailyItem[]
}

declare interface IContext {
	news: INewsItem[]
	dailyShop: IDailyItem[]
	getNews: () => Promise<void>
	getDailyShop: () => Promise<void>
}
