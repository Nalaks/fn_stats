declare interface INewsItem {
	id: string
	title: string
	image: string
	body: string
}

declare interface IDailyItems {
	daily: {
		entries: IDailyEntries[]
	}
	featured: {
		entries: IDailyEntries[]
	}
	specialDaily: {
		entries: IDailyEntries[]
	}
	specialFeatured: {
		entries: IDailyEntries[]
	}
}

declare interface IDailyEntries {
	offerId: string
	finalPrice: string
	bundle?: {
		image: string
		name: string
	}
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
	dailyShop: IDailyItems
	allCosmetics: any[]
}

declare interface IContext {
	news: INewsItem[]
	dailyShop: IDailyItems
	allCosmetics: any[]
	getNews: () => Promise<void>
	getDailyShop: () => Promise<void>
	getAllCosmetics: () => Promise<void>
}
