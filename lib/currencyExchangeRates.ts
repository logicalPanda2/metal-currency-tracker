import dotenv from "dotenv";

dotenv.config();

export async function getExchangeRatePair(
	base: ExchangeAPICurrencyCode,
	target: ExchangeAPICurrencyCode,
): Promise<CurrencyExchangePairData> {
	base;
	target;
	throw new Error();
}

export async function getExchangeRates(
	base: ExchangeAPICurrencyCode,
): Promise<CurrencyExchangeData> {
	base;
	throw new Error();
}
