import dotenv from "dotenv";

dotenv.config();

export async function getPreciousMetalData(metal: MetalCode, currency: Currency): Promise<PreciousMetalData> {
    try {
        if(!process.env.GOLD_API_KEY) throw new Error("API access key missing in environment variables.");

        const response = await fetch(`https://www.goldapi.io/api/${metal}/${currency}`, {
            mode: "cors",
            headers: {
                "x-access-token": process.env.GOLD_API_KEY,
            }
        });

        if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);

        const data: GoldAPIResponse = await response.json();

        const processed: PreciousMetalData = {
            metal: metalCodeToMetalMap[data.metal],
            currency: data.currency,
            troyOuncePrice: data.price,
            sellingPrice: data.bid,
            buyingPrice: data.ask,
        };

        return processed;
    } catch(e) {
        throw e;
    }
}

const metalCodeToMetalMap: Record<MetalCode, Metal> = {
    "XAU": "gold",
    "XAG": "silver",
    "XPT": "platinum",
    "XPD": "palladium",
}
