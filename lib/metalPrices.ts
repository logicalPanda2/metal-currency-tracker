import dotenv from "dotenv";

dotenv.config();

export default async function getPreciousMetalData(
	metal: PreciousMetalAPIMetalCode,
	currency: PreciousMetalAPICurrencyCode,
): Promise<PreciousMetalData> {
	try {
		if (!process.env.API_KEY_SECRET_1)
			throw new Error("API access key missing in environment variables.");

		if (!process.env.API_HEADER_SECRET_1)
			throw new Error(
				"API authorization header not configured in environment variables.",
			);

		if (!process.env.API_ENDPOINT_1)
			throw new Error("API not configured in environment variables.");

		const endpoint = process.env.API_ENDPOINT_1;

		const response = await fetch(
			endpoint.replace("METAL", metal).replace("CURRENCY", currency),
			{
				headers: {
					[`${process.env.API_HEADER_SECRET_1}`]:
						process.env.API_KEY_SECRET_1,
				},
			},
		);

		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);

		const data: PreciousMetalAPIResponse = await response.json();

		const processed: PreciousMetalData = {
			metal: metalCodeToMetalMap[data.metal],
			currency: data.currency,
			troyOuncePrice: data.price,
			sellingPrice: data.bid,
			buyingPrice: data.ask,
		};

		return processed;
	} catch (e) {
		throw e;
	}
}

const metalCodeToMetalMap: Record<PreciousMetalAPIMetalCode, Metal> = {
	XAU: "gold",
	XAG: "silver",
	XPT: "platinum",
	XPD: "palladium",
};
