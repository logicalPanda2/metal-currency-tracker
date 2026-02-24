export default function parseCurrencyCodes(
	messyCurrencyCodeString: string,
): string {
	const messyCurrencyCodeArr = messyCurrencyCodeString.split(" ");
	let currencyCodesUnion = "";

	// the logic below is not perfect. Words such as "CFP", "CFA", and "UAE" is included, so pick them out by hand.

	for (const c of messyCurrencyCodeArr) {
		if (c.length === 3 && c.toUpperCase() === c) {
			if (!currencyCodesUnion.length) {
				currencyCodesUnion += `"${c}"`;
			} else {
				currencyCodesUnion += ` | "${c}"`;
			}
		}
	}

	return currencyCodesUnion;
}
