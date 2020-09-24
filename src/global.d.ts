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
	rarity: {
		value: string
	}
}

declare interface IState {
	news: INewsItem[]
	dailyShop: IDailyItem[]
	featuredShop: IDailyItem[]
}

declare interface IContext {
	news: INewsItem[]
	dailyShop: IDailyItem[]
	featuredShop: IDailyItem[]
	getNews: () => Promise<void>
	getDailyShop: () => Promise<void>
	getFeaturedShop: () => Promise<void>
}
