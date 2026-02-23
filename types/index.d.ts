type Metal = "gold" | "silver" | "platinum" | "palladium";

interface PreciousMetalData {
	metal: Metal;
	currency: GoldAPICurrencyCode;
	troyOuncePrice: number;
	sellingPrice: number;
	buyingPrice: number;
}

interface CurrencyExchangePairData {}

interface CurrencyExchangeData {}
