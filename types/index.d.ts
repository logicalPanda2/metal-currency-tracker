type Metal = "gold" | "silver" | "platinum" | "palladium";

interface PreciousMetalData {
	metal: Metal;
	currency: GoldAPICurrencyCode;
	troyOuncePrice: number;
	sellingPrice: number;
	buyingPrice: number;
}

interface CurrencyExchangePairData {
	base: CurrencyAPICurrencyCode;
	target: CurrencyAPICurrencyCode;
	rate: number;
}

interface CurrencyExchangeData {
	base: CurrencyAPICurrencyCode;
	rates: Record<CurrencyAPICurrencyCode, number>;
}
