import { getCurrencyExchangeAll, getCurrencyExchangePair } from "@/lib/currencyExchangeRates";
import getPreciousMetalData from "@/lib/metalPrices";

export default async function getMetalAndExchangeData(
    metalCode: PreciousMetalAPIMetalCode,
    base: CurrencyAPICurrencyCode,
    target: CurrencyAPICurrencyCode,
): Promise<MetalAndExchangeData | undefined> {
    try {
        const metalData = await getPreciousMetalData(metalCode, "USD");
        const currencyExchangeData = await getCurrencyExchangeAll(base);
        const currencyExchangePairData = await getCurrencyExchangePair(base, target);

        return {
            metalData,
            currencyExchangeData,
            currencyExchangePairData,
        };
    } catch(e) {
        console.error(e);

        return undefined;
    }
}
