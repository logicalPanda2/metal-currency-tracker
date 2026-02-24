"use client"

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import Card from "./Card";

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
    const sellPrice = `$${Number(data.metalData.sellingPrice.toFixed(2)).toLocaleString()}`;
    const buyPrice = `$${Number(data.metalData.buyingPrice.toFixed(2)).toLocaleString()}`;
    const troyOuncePrice = `$${Number(data.metalData.troyOuncePrice.toFixed(2)).toLocaleString()}`;
    const gramPrice = `$${Number((data.metalData.troyOuncePrice / 31.1035).toFixed(2)).toLocaleString()}`;

    const baseCurrency = data.currencyExchangePairData.base;
    const targetCurrency = data.currencyExchangePairData.target;
    const conversionRate = data.currencyExchangePairData.rate;
    const aggregate = `1 ${baseCurrency} = ${Number(conversionRate.toFixed(2)).toLocaleString()} ${targetCurrency}`;
    const reversedBaseAggregate = `1 ${targetCurrency} = ${Number((1 / conversionRate).toFixed(2)).toLocaleString()} ${baseCurrency}`;
    
    const targetSellPrice = `${Number((data.metalData.sellingPrice * conversionRate).toFixed(2)).toLocaleString()}`;
    const targetBuyPrice = `${Number((data.metalData.buyingPrice * conversionRate).toFixed(2)).toLocaleString()}`;
    const targetTroyOuncePrice = `${Number((data.metalData.troyOuncePrice * conversionRate).toFixed(2)).toLocaleString()}`;
    const targetGramPrice = `${Number(((data.metalData.troyOuncePrice / 31.1035) * conversionRate).toFixed(2)).toLocaleString()}`;

	return (<>
        <header className="p-8">
            <h1 className="text-4xl">Gold Price and Currency Exchange Rates</h1>
        </header>
        <main className="px-8 flex flex-nowrap gap-x-8 flex-col md:flex-row">
            <section className="mb-8 md:w-1/2">
                <header>
                    <h2 className="text-2xl mb-4">Filters</h2>
                </header>
                <div className="flex flex-nowrap flex-col gap-2 md:gap-4 md:flex-row">
                    <div className="flex flex-nowrap flex-row gap-2 md:gap-4">
                        <Button onClick={() => setSearchParam("metal", "XAU")} textContent="Gold" />
                        <Button onClick={() => setSearchParam("metal", "XAG")} textContent="Silver" />
                    </div>
                    <div className="flex flex-nowrap flex-row gap-2 md:gap-4">
                        <Button onClick={() => setSearchParam("metal", "XPT")} textContent="Platinum" />
                        <Button onClick={() => setSearchParam("metal", "XPD")} textContent="Palladium" />
                    </div>
                </div>
                <div className="mt-4 flex flex-nowrap flex-row items-end">
                    <div className="flex flex-nowrap flex-col">
                        <label htmlFor="baseInput">BASE: </label>
                        <TextInput name="base" id="baseInput" value={base} onChange={(e) => setBase(e.target.value)} styles="mt-1" />
                    </div>
                    <Button 
                        onClick={() => setSearchParam("base", base)}
                        styles="mx-2 md:mx-4"
                        textContent="Set"
                    />
                </div>
                <div className="mt-4 flex flex-nowrap flex-row items-end">
                    <div className="flex flex-nowrap flex-col">
                        <label htmlFor="targetInput">TARGET: </label>
                        <TextInput name="target" id="targetInput" value={target} onChange={(e) => setTarget(e.target.value)} styles="mt-1" />
                    </div>
                    <Button 
                        onClick={() => setSearchParam("target", target)}
                        styles="mx-2 md:mx-4"
                        textContent="Set"
                    />
                </div>
            </section>
            <section className="md:w-1/2 pb-8">
                <header>
                    <h2 className="text-2xl mb-4">Data</h2>
                </header>
                <p className="text-xl mb-2">{metal} Prices</p>
                <div className="flex flex-wrap flex-row gap-2 md:gap-4 mb-4">
                    <Card accentedMainText={troyOuncePrice} mainText={currency} subText="/ oz t" />
                    <Card accentedMainText={sellPrice} mainText={currency} subText="Sell price" />
                    <Card accentedMainText={buyPrice} mainText={currency} subText="Buy price" />
                    <Card accentedMainText={gramPrice} mainText={currency} subText="/ gram" />
                </div>
                <div className="flex flex-wrap flex-row gap-2 md:gap-4 mb-4">
                    <Card accentedMainText={targetTroyOuncePrice} mainText={targetCurrency} subText="Translated / oz t" />
                    <Card accentedMainText={targetSellPrice} mainText={targetCurrency} subText="Translated sell price" />
                    <Card accentedMainText={targetBuyPrice} mainText={targetCurrency} subText="Translated buy price" />
                    <Card accentedMainText={targetGramPrice} mainText={targetCurrency} subText="Translated / gram" />
                </div>
                <p className="text-xl mb-2">Exchange Rates</p>
                <p className="text-2xl mb-2">{aggregate}</p>
                <p className="text-neutral-900 mb-2">and likewise,</p>
                <p className="text-2xl">{reversedBaseAggregate}</p>
            </section>
        </main>
    </>);
}
