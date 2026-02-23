type MetalCode = "XAU" | "XAG" | "XPT" | "XPD";
type Metal = "gold" | "silver" | "platinum" | "palladium";
type GoldAPICurrencyCode = "USD";

interface PreciousMetalData {
    metal: Metal,
    currency: GoldAPICurrencyCode,
    troyOuncePrice: number,
    sellingPrice: number,
    buyingPrice: number,
};

interface CurrencyExchangePairData {
    
}

interface CurrencyExchangeData {
    
}

interface GoldAPIResponse {
    "timestamp": number,
    "metal": MetalCode,
    "currency": Currency,
    "exchange": string,
    "symbol": string,
    "prev_close_price": number,
    "open_price": number,
    "low_price": number,
    "high_price": number,
    "open_time": number
    "price": number,
    "ch": number,
    "chp": number,
    "ask": number,
    "bid": number,
    "price_gram_24k": number,
    "price_gram_22k": number,
    "price_gram_21k": number,
    "price_gram_20k": number,
    "price_gram_18k": number,
    "price_gram_16k": number,
    "price_gram_14k": number,
    "price_gram_10k": number,
}

// API Docs say there are 165 country codes. Only 163 is found after filtering. I do not know where the other 2 are.  

type ExchangeAPICurrencyCode = 
"AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNH" | "CNY" | "COP" | "CRC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "FOK" | "GBP" | "GEL" | "GGP" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLE" | "SOS" | "SRD" | "SSP" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TVD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XDR" | "XOF" | "XPF" | "YER" | "ZAR" | "ZMW" | "ZWL";
