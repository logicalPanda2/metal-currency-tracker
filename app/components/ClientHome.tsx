"use client"

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientHome({ data }: {
    data: MetalAndExchangeData | undefined
}) {
    const params = useSearchParams();
    const router = useRouter();
    const [base, setBase] = useState<string>("");
    const [target, setTarget] = useState<string>("");

    const setSearchParam = (key: string, value: string): void => {
        const newParams = new URLSearchParams(params);
        newParams.set(key, value);

        router.push(`?${newParams.toString()}`, { scroll: false });
    }

    const metal = 
        data!.metalData.metal
        .split("")
        [0].toUpperCase() + 
        data!.metalData.metal
        .toLowerCase()
        .slice(1); // capitalize the first letter, concatenate subsequent lowercase characters
    const currency = data!.metalData.currency;
    const sellPrice = `$${data!.metalData.sellingPrice.toFixed(2)} ${currency}`;
    const buyPrice = `$${data!.metalData.buyingPrice.toFixed(2)} ${currency}`;
    const troyOuncePrice = `$${data!.metalData.troyOuncePrice.toFixed(2)} ${currency}`;

    const baseCurrency = data!.currencyExchangePairData.base;
    const targetCurrency = data!.currencyExchangePairData.target;
    const conversionRate = data!.currencyExchangePairData.rate;
    const aggregate = `1 ${baseCurrency} = ${conversionRate.toFixed(2)} ${targetCurrency}`;

	return (<>
        <header>
            <h1>Gold Price and Currency Exchange Rates</h1>
        </header>
        <main>
            <button onClick={() => setSearchParam("metal", "XAU")}>Gold</button>
            <button onClick={() => setSearchParam("metal", "XAG")}>Silver</button>
            <button onClick={() => setSearchParam("metal", "XPT")}>Platinum</button>
            <button onClick={() => setSearchParam("metal", "XPD")}>Palladium</button>
            <input 
                type="text"
                name="base"
                id="baseInput"
                value={base}
                onChange={(e) => setBase(e.target.value)}
            />
            <button onClick={() => setSearchParam("base", base)}>Set Base Currency</button>
            <input 
                type="text"
                name="target"
                id="targetInput"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
            />
            <button onClick={() => setSearchParam("target", target)}>Set Target Currency</button>
            <p>{metal}</p>
            <p>{troyOuncePrice}</p>
            <p>{sellPrice}</p>
            <p>{buyPrice}</p>
            <p>{aggregate}</p>
        </main>
    </>);
}
