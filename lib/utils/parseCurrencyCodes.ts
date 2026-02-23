export default function parseCurrencyCodes(messyCurrencyCodeString: string): string {
    const messyCurrencyCodeArr = messyCurrencyCodeString.split(" ");
    let currencyCodesUnion = "";

    for(const c of messyCurrencyCodeArr) {
        if(
            c.length === 3 &&
            c.toUpperCase() === c
        ) {
            if(!currencyCodesUnion.length) {
                currencyCodesUnion += `"${c}"`;
            } else {
                currencyCodesUnion += ` | "${c}"`;
            }
        }
    }

    return currencyCodesUnion;
}

console.log(
    parseCurrencyCodes(`
        AED UAE Dirham United Arab Emirates
        AFN Afghan Afghani Afghanistan
        ALL Albanian Lek Albania
        AMD Armenian Dram Armenia
        ANG Netherlands Antillian Guilder Netherlands Antilles
        AOA Angolan Kwanza Angola
        ARS Argentine Peso Argentina
        AUD Australian Dollar Australia
        AWG Aruban Florin Aruba
        AZN Azerbaijani Manat Azerbaijan
        BAM Bosnia and Herzegovina Mark Bosnia and Herzegovina
        BBD BarbadosdDollardBarbados
        BDTdBangladeshidTakadBangladesh
        BGNdBulgariandLevdBulgaria
        BHDdBahrainidDinardBahrain
        BIFdBurundiandFrancdBurundi
        BMDdBermudiandDollardBermuda
        BNDdBruneidDollardBrunei
        BOBdBoliviandBolivianodBolivia
        BRLdBraziliandRealdBrazil
        BSDdBahamiandDollardBahamas
        BTNdBhutanesedNgultrumdBhutan
        BWPdBotswanadPuladBotswana
        BYNdBelarusiandRubledBelarus
        BZDdBelizedDollardBelize
        CADdCanadiandDollardCanada
        CDFdCongolesedFrancdDemocraticdRepublicdofdthedCongo
        CHFdSwissdFrancdSwitzerland
        CLFdChileandUnidadddedFomentodChile
        CLPdChileandPesodChile
        CNHdOffshoredChinesedRenminbidChina
        CNYdChinesedRenminbidChina
        COPdColombiandPesodColombia
        CRCdCostadRicandColondCostadRica
        CUPdCubandPesodCuba
        CVEdCapedVerdeandEscudodCapedVerde
        CZKdCzechdKorunadCzechdRepublic
        DJFdDjiboutiandFrancdDjibouti
        DKKdDanishdKronedDenmark
        DOPdDominicandPesodDominicandRepublic
        DZDdAlgeriandDinardAlgeria
        EGPdEgyptiandPounddEgypt
        ERNdEritreandNakfadEritrea
        ETBdEthiopiandBirrdEthiopia
        EURdEurodEuropeandUnion
        FJDdFijidDollardFiji
        FKPdFalklanddIslandsdPounddFalklanddIslands
        FOKdFaroesedKrónadFaroedIslands
        GBPdPounddSterlingdUniteddKingdom
        GELdGeorgiandLaridGeorgia
        GGPdGuernseydPounddGuernsey
        GHSdGhanaiandCedidGhana
        GIPdGibraltardPounddGibraltar
        GMDdGambiandDalasidThedGambia
        GNFdGuineandFrancdGuinea
        GTQdGuatemalandQuetzaldGuatemala
        GYDdGuyanesedDollardGuyana
        HKDdHongdKongdDollardHongdKong
        HNLdHondurandLempiradHonduras
        HRKdCroatiandKunadCroatia
        HTGdHaitiandGourdedHaiti
        HUFdHungariandForintdHungary
        IDRdIndonesiandRupiahdIndonesia
        ILSdIsraelidNewdShekeldIsrael
        IMPdManxdPounddIsledofdMan
        INRdIndiandRupeedIndia
        IQDdIraqidDinardIraq
        IRRdIraniandRialdIran
        ISKdIcelandicdKrónadIceland
        JEPdJerseydPounddJersey
        JMDdJamaicandDollardJamaica
        JODdJordaniandDinardJordan
        JPYdJapanesedYendJapan
        KESdKenyandShillingdKenya
        KGSdKyrgyzstanidSomdKyrgyzstan
        KHR Cambodian Riel Cambodia
        KID Kiribati Dollar Kiribati
        KMF Comorian Franc Comoros
        KRW South Korean Won South Korea
        KWD Kuwaiti Dinar Kuwait
        KYD Cayman Islands Dollar Cayman Islands
        KZT Kazakhstani Tenge Kazakhstan
        LAK Lao Kip Laos
        LBP Lebanese Pound Lebanon
        LKR Sri Lanka Rupee Sri Lanka
        LRD Liberian Dollar Liberia
        LSL Lesotho Loti Lesotho
        LYD Libyan Dinar Libya
        MAD Moroccan Dirham Morocco
        MDL Moldovan Leu Moldova
        MGA Malagasy Ariary Madagascar
        MKD Macedonian Denar North Macedonia
        MMK Burmese Kyat Myanmar
        MNT Mongolian Tögrög Mongolia
        MOP Macanese Pataca Macau
        MRU Mauritanian Ouguiya Mauritania
        MUR Mauritian Rupee Mauritius
        MVR Maldivian Rufiyaa Maldives
        MWK Malawian Kwacha Malawi
        MXN Mexican Peso Mexico
        MYR Malaysian Ringgit Malaysia
        MZN Mozambican Metical Mozambique
        NAD Namibian Dollar Namibia
        NGN Nigerian Naira Nigeria
        NIO Nicaraguan Córdoba Nicaragua
        NOK Norwegian Krone Norway
        NPR Nepalese Rupee Nepal
        NZD New Zealand Dollar New Zealand
        OMR Omani Rial Oman
        PAB Panamanian Balboa Panama
        PEN Peruvian Sol Peru
        PGK Papua New Guinean Kina Papua New Guinea
        PHP Philippine Peso Philippines
        PKR Pakistani Rupee Pakistan
        PLN Polish Złoty Poland
        PYG Paraguayan Guaraní Paraguay
        QAR Qatari Riyal Qatar
        RON Romanian Leu Romania
        RSD Serbian Dinar Serbia
        RUB Russian Ruble Russia
        RWF Rwandan Franc Rwanda
        SAR Saudi Riyal Saudi Arabia
        SBD Solomon Islands Dollar Solomon Islands
        SCR Seychellois Rupee Seychelles
        SDG Sudanese Pound Sudan
        SEK Swedish Krona Sweden
        SGD Singapore Dollar Singapore
        SHP Saint Helena Pound Saint Helena
        SLE Sierra Leonean Leone Sierra Leone
        SOS Somali Shilling Somalia
        SRD Surinamese Dollar Suriname
        SSP South Sudanese Pound South Sudan
        STN São Tomé and Príncipe Dobra São Tomé and Príncipe
        SYP Syrian Pound Syria
        SZL Eswatini Lilangeni Eswatini
        THB Thai Baht Thailand
        TJS Tajikistani Somoni Tajikistan
        TMT Turkmenistan Manat Turkmenistan
        TND Tunisian Dinar Tunisia
        TOP Tongan Paʻanga Tonga
        TRY Turkish Lira Turkey
        TTD Trinidad and Tobago Dollar Trinidad and Tobago
        TVD Tuvaluan Dollar Tuvalu
        TWD New Taiwan Dollar Taiwan
        TZS Tanzanian Shilling Tanzania
        UAH Ukrainian Hryvnia Ukraine
        UGX Ugandan Shilling Uganda
        USD United States Dollar United States
        UYU Uruguayan Peso Uruguay
        UZS Uzbekistani So'm Uzbekistan
        VES Venezuelan Bolívar Soberano Venezuela
        VND Vietnamese Đồng Vietnam
        VUV Vanuatu Vatu Vanuatu
        WST Samoan Tālā Samoa
        XAF Central African CFA Franc CEMAC
        XCD East Caribbean Dollar Organisation of Eastern Caribbean States
        XDR Special Drawing Rights International Monetary Fund
        XOF West African CFA franc CFA
        XPF CFP Franc Collectivités d'Outre-Mer
        YER Yemeni Rial Yemen
        ZAR South African Rand South Africa
        ZMW Zambian Kwacha Zambia
        ZWL Zimbabwean Dollar Zimbabwe
    `)
);
