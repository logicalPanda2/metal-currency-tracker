// The type declarations in this file does not serve as
// a representation of any specific API responses, and instead
// serve only as an example of the minimum necessary properties
// for this app to be able to function.

// This file is read only. Please make a dedicated api.d.ts
// and put the actual type declarations there.

type PreciousMetalAPICurrencyCode = "USD";
type PreciousMetalAPIMetalCode = "XAU" | "XAG" | "XPT" | "XPD";

interface PreciousMetalAPIResponse {
	metal: PreciousMetalAPIMetalCode;
	currency: PreciousMetalAPICurrencyCode;
	price: number;
	ask: number;
	bid: number;
}

type CurrencyAPICurrencyCode = "USD" | "AUD" | "EUR";

interface CurrencyAPIResponse {
	base_code: CurrencyAPICurrencyCode;
	conversion_rates: Record<CurrencyAPICurrencyCode, number>;
}

interface CurrencyAPIPairResponse {
	base_code: CurrencyAPICurrencyCode;
	target_code: CurrencyAPICurrencyCode;
	conversion_rate: number;
}
