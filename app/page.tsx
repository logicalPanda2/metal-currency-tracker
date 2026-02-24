import getMetalAndExchangeData from "@/fetch/getMetalAndExchangeData";
import ClientHome from "./components/ClientHome";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{
		metal: string;
		base: string;
		target: string;
	}>;
}) {
	const params = await searchParams;
	const metalCode = (params.metal ?? "XAU") as PreciousMetalAPIMetalCode;
	const baseCurrencyCode = (params.base ?? "USD") as CurrencyAPICurrencyCode;
	const targetCurrencyCode = (params.target ??
		"IDR") as CurrencyAPICurrencyCode;

	const data = await getMetalAndExchangeData(
		metalCode,
		baseCurrencyCode,
		targetCurrencyCode,
	);

	return <ClientHome data={data} />;
}
