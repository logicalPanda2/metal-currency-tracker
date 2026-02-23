export default function parseCurrencyCodes(messyCurrencyCodeString: string): string {
    const messyCurrencyCodeArr = messyCurrencyCodeString.split(" ");
    let currencyCodesUnion = "";

    for(const c of messyCurrencyCodeArr) {
        if(c.length === 3) {
            if(!currencyCodesUnion.length) {
                currencyCodesUnion.concat(c)
            } else {
                currencyCodesUnion.concat(" " + "|" + " " + c);
            }
        }
    }

    return currencyCodesUnion;
}

