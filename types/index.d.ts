type Metal = "gold" | "silver" | "platinum" | "palladium";

interface PreciousMetalData {
	metal: Metal;
	currency: PreciousMetalAPICurrencyCode;
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

interface MetalAndExchangeData {
    metalData: PreciousMetalData,
    currencyExchangePairData: CurrencyExchangePairData,
}

interface ButtonProps {
    textContent: string,
    styles?: string,
    onClick: (...args: any[]) => any,
}

interface TextInputProps {
    name: string,
    id: string,
    value: string,
    onChange: (...args: any[]) => any,
    styles?: string,
}

interface CardProps {
    mainText: string,
    subText: string,
}
