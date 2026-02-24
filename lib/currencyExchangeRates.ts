import dotenv from "dotenv";

dotenv.config();

export async function getCurrencyExchangePair(
	base: CurrencyAPICurrencyCode,
	target: CurrencyAPICurrencyCode,
): Promise<CurrencyExchangePairData> {
	base;
	target;
	throw new Error();
}

export async function getCurrencyExchangeAll(
	base: CurrencyAPICurrencyCode,
): Promise<CurrencyExchangeData> {
	base;
	throw new Error();
}
