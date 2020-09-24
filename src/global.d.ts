declare interface INewsItem {
	id: string
	title: string
	image: string
	body: string
}

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
	allCosmetics: any[]
}

declare interface IContext {
	news: INewsItem[]
	dailyShop: IDailyItem[]
	featuredShop: IDailyItem[]
	allCosmetics: any[]
	getNews: () => Promise<void>
	getDailyShop: () => Promise<void>
	getFeaturedShop: () => Promise<void>
	getAllCosmetics: () => Promise<void>
}
