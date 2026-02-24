import dotenv from "dotenv";

dotenv.config();

export async function getCurrencyExchangePair(
	base: CurrencyAPICurrencyCode,
	target: CurrencyAPICurrencyCode,
): Promise<CurrencyExchangePairData> {
	try {
		if (!process.env.API_KEY_SECRET_2)
			throw new Error("API access key missing in environment variables.");

		if (!process.env.API_ENDPOINT_2A || !process.env.API_ENDPOINT_2B)
			throw new Error("API not configured in environment variables.");

		const endpoint = process.env.API_ENDPOINT_2A;

		const response = await fetch(
			endpoint
				.replace("KEY", process.env.API_KEY_SECRET_2)
				.replace("BASE", base)
				.replace("TARGET", target),
		);

		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);

		const data: CurrencyAPIPairResponse = await response.json();

		const processed: CurrencyExchangePairData = {
			base: data.base_code,
			target: data.target_code,
			rate: data.conversion_rate,
		};

		return processed;
	} catch (e) {
		throw e;
	}
}

export async function getCurrencyExchangeAll(
	base: CurrencyAPICurrencyCode,
): Promise<CurrencyExchangeData> {
	try {
		if (!process.env.API_KEY_SECRET_2)
			throw new Error("API access key missing in environment variables.");

		if (!process.env.API_ENDPOINT_2A || !process.env.API_ENDPOINT_2B)
			throw new Error("API not configured in environment variables.");

		const endpoint = process.env.API_ENDPOINT_2B;

		const response = await fetch(
			endpoint
				.replace("KEY", process.env.API_KEY_SECRET_2)
				.replace("BASE", base),
		);

		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);

		const data: CurrencyAPIResponse = await response.json();

		const processed: CurrencyExchangeData = {
			base: data.base_code,
			rates: data.conversion_rates,
		};

		return processed;
	} catch (e) {
		throw e;
	}
}
