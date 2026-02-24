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

    if(!data) 
        return <main className="p-8">
            <h1 className="text-4xl mb-2">An unexpected error occured</h1>
            <p className="text-xl">View the console for more information</p>
        </main>;

    const metal = 
        data.metalData.metal
        .split("")
        [0].toUpperCase() + 
        data.metalData.metal
        .toLowerCase()
        .slice(1); // capitalize the first letter, concatenate subsequent lowercase characters
    const currency = data.metalData.currency;
    const sellPrice = `$${data.metalData.sellingPrice.toFixed(2)} ${currency}`;
    const buyPrice = `$${data.metalData.buyingPrice.toFixed(2)} ${currency}`;
    const troyOuncePrice = `$${data.metalData.troyOuncePrice.toFixed(2)} ${currency}`;

    const baseCurrency = data.currencyExchangePairData.base;
    const targetCurrency = data.currencyExchangePairData.target;
    const conversionRate = data.currencyExchangePairData.rate;
    const aggregate = `1 ${baseCurrency} = ${conversionRate.toFixed(2)} ${targetCurrency}`;

	return (<>
        <header className="p-8">
            <h1 className="text-4xl">Gold Price and Currency Exchange Rates</h1>
        </header>
        <main className="px-8 flex flex-nowrap flex-row">
            <section className="mb-8 w-1/2">
                <header>
                    <h2 className="text-2xl mb-4">Filters</h2>
                </header>
                <div className="flex flex-nowrap flex-col gap-2 md:gap-4 md:flex-row">
                    <div className="flex flex-nowrap flex-row gap-2 md:gap-4">
                        <button 
                            onClick={() => setSearchParam("metal", "XAU")}
                            className="px-3 py-1 border rounded"
                        >
                            Gold
                        </button>
                        <button 
                            onClick={() => setSearchParam("metal", "XAG")}
                            className="px-3 py-1 border rounded"
                        >
                            Silver
                        </button>
                    </div>
                    <div className="flex flex-nowrap flex-row gap-2 md:gap-4">
                        <button 
                            onClick={() => setSearchParam("metal", "XPT")}
                            className="px-3 py-1 border rounded"
                        >
                            Platinum
                        </button>
                        <button 
                            onClick={() => setSearchParam("metal", "XPD")}
                            className="px-3 py-1 border rounded"
                        >
                            Palladium
                        </button>
                    </div>
                </div>
                <div className="mt-2 flex flex-nowrap flex-row items-end">
                    <div className="flex flex-nowrap flex-col">
                        <label htmlFor="baseInput">BASE: </label>
                        <input
                            type="text"
                            name="base"
                            id="baseInput"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            className="py-1 px-2 border rounded mt-1"
                            autoComplete="false"
                        />
                    </div>
                    <button 
                        onClick={() => setSearchParam("base", base)}
                        className="px-3 py-1 border rounded mx-2 md:mx-4"
                    >
                        Set
                    </button>
                </div>
                <div className="mt-2 flex flex-nowrap flex-row items-end">
                    <div className="flex flex-nowrap flex-col">
                        <label htmlFor="targetInput">TARGET: </label>
                        <input
                            type="text"
                            name="target"
                            id="targetInput"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="py-1 px-2 border rounded mt-1"
                            autoComplete="false"
                        />
                    </div>
                    <button 
                        onClick={() => setSearchParam("target", target)}
                        className="px-3 py-1 border rounded mx-2 md:mx-4"
                    >
                        Set
                    </button>
                </div>
            </section>
            <section className="w-1/2">
                <header>
                    <h2 className="text-2xl mb-4">Data</h2>
                </header>
                <p>{metal}</p>
                <p>{troyOuncePrice}</p>
                <p>{sellPrice}</p>
                <p>{buyPrice}</p>
                <p>{aggregate}</p>
            </section>
        </main>
    </>);
}
