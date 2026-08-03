export type SearchItem = {
  name: string;
  url: string;
  category: string;
  description: string;
  keywords?: string[];
  aliases?: string[];
  type: "platform" | "category";
};

type RankedSearchItem = SearchItem & {
  score: number;
};

export const searchItems = [
  {
    name: "Binance",
    url: "/crypto/binance",
    category: "Crypto",
    description: "Exchange de cryptomonnaies complet pour acheter, vendre et trader.",
    keywords: ["crypto", "exchange crypto", "bitcoin", "trading", "altcoins"],
    type: "platform",
  },
  {
    name: "Bitget",
    url: "/crypto/bitget",
    category: "Crypto",
    description: "Plateforme crypto orientée trading, copy trading et promotions.",
    keywords: ["crypto", "exchange crypto", "trading", "copy trading"],
    type: "platform",
  },
  {
    name: "Crypto.com",
    url: "/crypto/crypto-com",
    category: "Crypto",
    description: "Application crypto pour acheter, vendre et gérer des cryptomonnaies.",
    keywords: ["crypto", "application crypto", "carte crypto", "bitcoin"],
    aliases: ["Crypto com", "Cryptocom"],
    type: "platform",
  },
  {
    name: "Coinbase",
    url: "/crypto/coinbase",
    category: "Crypto",
    description: "Exchange crypto simple pour débuter et gérer ses premiers actifs numériques.",
    keywords: ["crypto", "exchange crypto", "bitcoin", "débutant crypto"],
    type: "platform",
  },
  {
    name: "Ledger",
    url: "/crypto/ledger",
    category: "Crypto",
    description: "Wallet physique pour sécuriser ses cryptomonnaies hors plateforme.",
    keywords: ["wallet", "portefeuille crypto", "clé privée", "sécurité crypto"],
    type: "platform",
  },
  {
    name: "Nexo",
    url: "/crypto/nexo",
    category: "Crypto",
    description: "Services financiers crypto, épargne crypto et gestion d'actifs numériques.",
    keywords: ["crypto", "épargne crypto", "services crypto", "portefeuille crypto"],
    type: "platform",
  },
  {
    name: "Kraken",
    url: "/crypto/kraken",
    category: "Crypto",
    description: "Exchange de cryptomonnaies reconnu pour acheter, vendre et gérer ses cryptos.",
    keywords: ["crypto", "bitcoin", "exchange crypto", "trading"],
    aliases: ["Kraken Exchange"],
    type: "platform",
  },
  {
    name: "SwissBorg",
    url: "/crypto/swissborg",
    category: "Crypto",
    description: "Application crypto européenne pour acheter, vendre et gérer ses actifs.",
    keywords: ["crypto", "application crypto", "portefeuille crypto"],
    aliases: ["Swiss Borg"],
    type: "platform",
  },
  {
    name: "Waltio",
    url: "/crypto/waltio",
    category: "Crypto",
    description: "Assistant fiscal crypto pour préparer ses calculs et déclarations.",
    keywords: ["fiscalité crypto", "impôts crypto", "déclaration crypto", "crypto"],
    type: "platform",
  },
  {
    name: "Bybit",
    url: "/crypto/bybit",
    category: "Crypto",
    description: "Plateforme crypto avancée pour trading et produits de marché.",
    keywords: ["crypto", "exchange crypto", "trading", "futures"],
    type: "platform",
  },
  {
    name: "HTX",
    url: "/crypto/htx",
    category: "Crypto",
    description: "Exchange crypto avancé, anciennement lié à l'écosystème Huobi.",
    keywords: ["crypto", "exchange crypto", "trading", "huobi"],
    aliases: ["Huobi"],
    type: "platform",
  },
  {
    name: "AscendEX",
    url: "/crypto/ascendex",
    category: "Crypto",
    description: "Plateforme crypto avancée anciennement connue sous le nom BitMax.",
    keywords: ["crypto", "exchange crypto", "trading", "bitmax"],
    aliases: ["Ascend EX", "BitMax", "BitMax.io"],
    type: "platform",
  },
  {
    name: "KuCoin",
    url: "/crypto/kucoin",
    category: "Crypto",
    description: "Exchange crypto international orienté trading, altcoins et produits avancés.",
    keywords: ["crypto", "exchange crypto", "trading", "altcoins"],
    aliases: ["Ku Coin"],
    type: "platform",
  },
  {
    name: "Meria",
    url: "/crypto/meria",
    category: "Crypto",
    description: "Plateforme crypto française pour achat, conservation, staking et investissement.",
    keywords: ["crypto", "staking", "portefeuille crypto", "just mining"],
    aliases: ["Just Mining"],
    type: "platform",
  },
  {
    name: "Deblock",
    url: "/crypto/deblock",
    category: "Crypto",
    description: "Application combinant compte en euros, carte Visa et services crypto.",
    keywords: ["crypto", "compte crypto", "carte crypto", "iban"],
    aliases: ["DeBlock"],
    type: "platform",
  },
  {
    name: "Bitpanda",
    url: "/crypto/bitpanda",
    category: "Crypto",
    description: "Broker crypto européen multi-actifs pour cryptos, actions, ETF et métaux.",
    keywords: ["crypto", "broker", "courtier", "ETF", "métaux précieux"],
    type: "platform",
  },
  {
    name: "Revolut",
    url: "/banques-en-ligne/revolut",
    category: "Banques en ligne",
    description: "Application financière avec compte mobile, carte bancaire et paiements.",
    keywords: ["banque en ligne", "carte bancaire", "compte mobile", "paiement"],
    type: "platform",
  },
  {
    name: "N26",
    url: "/banques-en-ligne/n26",
    category: "Banques en ligne",
    description: "Banque mobile avec compte, carte et application de gestion quotidienne.",
    keywords: ["banque en ligne", "carte bancaire", "compte mobile"],
    type: "platform",
  },
  {
    name: "Hello bank!",
    url: "/banques-en-ligne/hello-bank",
    category: "Banques en ligne",
    description: "Banque en ligne et mobile pour compte, carte et services bancaires.",
    keywords: ["banque en ligne", "carte bancaire", "compte bancaire"],
    aliases: ["Hello Bank"],
    type: "platform",
  },
  {
    name: "Qonto",
    url: "/banques-en-ligne/qonto",
    category: "Banques en ligne",
    description: "Compte professionnel en ligne pour indépendants, PME et équipes.",
    keywords: ["banque en ligne", "compte pro", "carte bancaire", "entreprise"],
    type: "platform",
  },
  {
    name: "Green-Got",
    url: "/banques-en-ligne/green-got",
    category: "Banques en ligne",
    description: "Compte et carte orientés argent responsable et impact environnemental.",
    keywords: ["banque en ligne", "carte bancaire", "compte responsable"],
    aliases: ["Green Got", "GreenGot"],
    type: "platform",
  },
  {
    name: "DEGIRO",
    url: "/investissement/degiro",
    category: "Investissement",
    description: "Courtier en ligne orienté actions, ETF et marchés financiers.",
    keywords: ["courtier", "ETF", "actions", "investissement", "broker"],
    aliases: ["Degiro"],
    type: "platform",
  },
  {
    name: "eToro",
    url: "/investissement/etoro",
    category: "Investissement",
    description: "Plateforme d'investissement pour actions, ETF, crypto et copy trading.",
    keywords: ["courtier", "ETF", "actions", "copy trading", "crypto"],
    aliases: ["Etoro"],
    type: "platform",
  },
  {
    name: "Finary",
    url: "/investissement/finary",
    category: "Investissement",
    description: "Application de suivi de patrimoine, comptes, investissements et budget.",
    keywords: ["patrimoine", "investissement", "budget", "crypto", "ETF"],
    type: "platform",
  },
  {
    name: "Interactive Brokers",
    url: "/investissement/interactive-brokers",
    category: "Investissement",
    description: "Courtier international complet pour actions, ETF, options et marchés.",
    keywords: ["courtier", "broker", "ETF", "actions", "marchés financiers"],
    aliases: ["IBKR"],
    type: "platform",
  },
  {
    name: "TradingView",
    url: "/investissement/tradingview",
    category: "Investissement",
    description: "Plateforme de graphiques, alertes et analyse des marchés financiers.",
    keywords: ["trading", "analyse", "graphiques", "actions", "ETF", "crypto"],
    aliases: ["Trading View"],
    type: "platform",
  },
  {
    name: "VeraCash",
    url: "/investissement/veracash",
    category: "Investissement",
    description: "Solution française pour détenir de l'or et des métaux précieux.",
    keywords: ["or", "métaux précieux", "investissement", "carte bancaire"],
    aliases: ["Vera Cash"],
    type: "platform",
  },
  {
    name: "Saxo",
    url: "/investissement/saxo",
    category: "Investissement",
    description: "Courtier en ligne international pour actions, ETF, obligations et trading.",
    keywords: ["courtier", "broker", "ETF", "actions", "trading"],
    aliases: ["Saxo Bank"],
    type: "platform",
  },
  {
    name: "Robinhood",
    url: "/investissement/robinhood",
    category: "Investissement",
    description: "Application d'investissement internationale avec actions et crypto selon disponibilité.",
    keywords: ["investissement", "actions", "crypto", "courtier"],
    type: "platform",
  },
  {
    name: "GOLD AVENUE",
    url: "/investissement/gold-avenue",
    category: "Investissement",
    description: "Plateforme suisse pour acheter, stocker et vendre des métaux précieux.",
    keywords: ["or", "métaux précieux", "investissement", "argent"],
    aliases: ["Gold Avenue"],
    type: "platform",
  },
  {
    name: "Monefit",
    url: "/investissement/monefit",
    category: "Investissement",
    description: "Plateforme d'investissement alternative liée à des prêts européens.",
    keywords: ["investissement", "prêts", "rendement", "crowdlending"],
    aliases: ["Monefit SmartSaver", "SmartSaver"],
    type: "platform",
  },
  {
    name: "BullionVault",
    url: "/investissement/bullionvault",
    category: "Investissement",
    description: "Plateforme pour acheter, vendre et stocker de l'or et des métaux précieux.",
    keywords: ["or", "métaux précieux", "investissement", "argent"],
    aliases: ["Bullion Vault"],
    type: "platform",
  },
  {
    name: "Invvest",
    url: "/investissement/invvest",
    category: "Investissement",
    description: "Outil en français pour suivre son patrimoine et ses portefeuilles.",
    keywords: ["patrimoine", "investissement", "ETF", "crypto", "revenus passifs"],
    aliases: ["Invvest Patrimoine"],
    type: "platform",
  },
  {
    name: "Trade Republic",
    url: "/investissement/trade-republic",
    category: "Investissement",
    description: "Application d'investissement pour actions, ETF et plans programmés.",
    keywords: ["courtier", "ETF", "actions", "investissement", "banque"],
    aliases: ["TradeRepublic"],
    type: "platform",
  },
  {
    name: "iGraal",
    url: "/cashback/igraal",
    category: "Cashback",
    description: "Plateforme de cashback pour récupérer une partie de ses achats en ligne.",
    keywords: ["cashback", "codes promo", "bons plans", "achat en ligne"],
    aliases: ["Igraal"],
    type: "platform",
  },
  {
    name: "Widilo",
    url: "/cashback/widilo",
    category: "Cashback",
    description: "Plateforme de cashback et codes promo pour achats en ligne.",
    keywords: ["cashback", "codes promo", "bons plans", "achat en ligne"],
    type: "platform",
  },
  {
    name: "eBuyClub",
    url: "/cashback/ebuyclub",
    category: "Cashback",
    description: "Plateforme de cashback, bons plans et codes promo.",
    keywords: ["cashback", "codes promo", "bons plans", "achat en ligne"],
    aliases: ["ebuyclub", "e buy club", "Ebuy Club"],
    type: "platform",
  },
  {
    name: "Poulpeo",
    url: "/cashback/poulpeo",
    category: "Cashback",
    description: "Plateforme de cashback et réductions pour économiser sur ses achats.",
    keywords: ["cashback", "codes promo", "bons plans", "achat en ligne"],
    type: "platform",
  },
  {
    name: "Curve Pay",
    url: "/cartes-et-paiements/curve-pay",
    category: "Cartes et paiements",
    description: "Carte intelligente pour regrouper plusieurs cartes et paiements.",
    keywords: ["carte bancaire", "paiement", "wallet", "carte intelligente"],
    aliases: ["Curve"],
    type: "platform",
  },
  {
    name: "Wise",
    url: "/cartes-et-paiements/wise",
    category: "Cartes et paiements",
    description: "Compte multi-devises et carte pour paiements internationaux.",
    keywords: ["carte bancaire", "paiement", "devises", "transfert"],
    type: "platform",
  },
  {
    name: "SumUp",
    url: "/cartes-et-paiements/sumup",
    category: "Cartes et paiements",
    description: "Terminal de paiement et solutions d'encaissement pour professionnels.",
    keywords: ["terminal de paiement", "paiement", "carte bancaire", "professionnel"],
    aliases: ["Sum Up"],
    type: "platform",
  },
  {
    name: "Monese",
    url: "/cartes-et-paiements/monese",
    category: "Cartes et paiements",
    description: "Compte mobile et carte de paiement pour usage quotidien.",
    keywords: ["carte bancaire", "paiement", "compte mobile", "banque en ligne"],
    type: "platform",
  },
  {
    name: "myPOS",
    url: "/cartes-et-paiements/mypos",
    category: "Cartes et paiements",
    description: "Solutions de paiement et terminaux pour commerçants et indépendants.",
    keywords: ["terminal de paiement", "paiement", "carte bancaire", "professionnel"],
    aliases: ["My POS"],
    type: "platform",
  },
  {
    name: "American Express Belgique",
    url: "/cartes-et-paiements/american-express-belgique",
    category: "Cartes et paiements",
    description: "Cartes American Express disponibles en Belgique selon conditions.",
    keywords: ["carte bancaire", "paiement", "amex", "carte de crédit"],
    aliases: ["American Express", "Amex"],
    type: "platform",
  },
  {
    name: "Hostinger",
    url: "/hebergement-web/hostinger",
    category: "Hébergement web",
    description: "Hébergeur web pour sites, WordPress, domaines et projets en ligne.",
    keywords: ["hébergement web", "hebergement", "wordpress", "nom de domaine", "site web"],
    type: "platform",
  },
  {
    name: "OVHcloud",
    url: "/hebergement-web/ovh",
    category: "Hébergement web",
    description: "Hébergement web, noms de domaine, serveurs et services cloud européens.",
    keywords: ["hébergement web", "hebergement", "cloud", "serveur", "nom de domaine"],
    aliases: ["OVH", "OVH Cloud"],
    type: "platform",
  },
  {
    name: "Back Market",
    url: "/e-commerce/back-market",
    category: "E-commerce",
    description: "Marketplace spécialisée dans les produits reconditionnés.",
    keywords: ["e-commerce", "reconditionné", "achat en ligne", "bons plans"],
    aliases: ["BackMarket"],
    type: "platform",
  },
  {
    name: "Dealabs",
    url: "/e-commerce/dealabs",
    category: "E-commerce",
    description: "Communauté de bons plans, promotions et codes promo.",
    keywords: ["e-commerce", "bons plans", "codes promo", "réductions"],
    type: "platform",
  },
  {
    name: "ElevenLabs",
    url: "/outils-ia/elevenlabs",
    category: "Outils IA",
    description: "Outil IA de génération de voix, doublage et audio synthétique.",
    keywords: ["outils IA", "voix IA", "audio IA", "doublage", "intelligence artificielle"],
    aliases: ["Eleven Labs"],
    type: "platform",
  },
  {
    name: "Make",
    url: "/outils-ia/make",
    category: "Outils IA",
    description: "Plateforme d'automatisation visuelle entre applications et services.",
    keywords: ["outils IA", "automatisation", "no-code", "workflow"],
    aliases: ["Make.com", "Integromat"],
    type: "platform",
  },
  {
    name: "n8n",
    url: "/outils-ia/n8n",
    category: "Outils IA",
    description: "Outil d'automatisation de workflows avec intégrations et logique avancée.",
    keywords: ["outils IA", "automatisation", "workflow", "no-code"],
    aliases: ["N8N"],
    type: "platform",
  },
  {
    name: "Gamma",
    url: "/outils-ia/gamma",
    category: "Outils IA",
    description: "Outil IA pour créer des présentations, documents et pages visuelles.",
    keywords: ["outils IA", "présentation IA", "création de contenu", "slides"],
    aliases: ["Gamma App"],
    type: "platform",
  },
  {
    name: "Crypto",
    url: "/crypto",
    category: "Catégorie",
    description: "Plateformes crypto, wallets, fiscalité crypto et actifs numériques.",
    keywords: ["exchange crypto", "bitcoin", "wallet", "portefeuille crypto", "fiscalité crypto"],
    type: "category",
  },
  {
    name: "Banques en ligne",
    url: "/banques-en-ligne",
    category: "Catégorie",
    description: "Banques mobiles, comptes en ligne et cartes bancaires.",
    keywords: ["banque en ligne", "compte mobile", "carte bancaire"],
    type: "category",
  },
  {
    name: "Investissement",
    url: "/investissement",
    category: "Catégorie",
    description: "Courtiers, ETF, actions, patrimoine et plateformes d'investissement.",
    keywords: ["courtier", "ETF", "actions", "patrimoine", "investissement"],
    type: "category",
  },
  {
    name: "Cashback",
    url: "/cashback",
    category: "Catégorie",
    description: "Cashback, codes promo et remboursements sur achats en ligne.",
    keywords: ["cashback", "codes promo", "bons plans", "achat en ligne"],
    type: "category",
  },
  {
    name: "Hébergement web",
    url: "/hebergement-web",
    category: "Catégorie",
    description: "Hébergeurs web, domaines, WordPress, serveurs et cloud.",
    keywords: ["hébergement web", "hebergement", "wordpress", "nom de domaine"],
    type: "category",
  },
  {
    name: "Cartes et paiements",
    url: "/cartes-et-paiements",
    category: "Catégorie",
    description: "Cartes bancaires, comptes mobiles et terminaux de paiement.",
    keywords: ["carte bancaire", "terminal de paiement", "paiement"],
    aliases: ["Cartes & paiements"],
    type: "category",
  },
  {
    name: "E-commerce",
    url: "/e-commerce",
    category: "Catégorie",
    description: "Achats en ligne, marketplaces, reconditionné et bons plans.",
    keywords: ["e-commerce", "achat en ligne", "bons plans", "codes promo"],
    aliases: ["E commerce"],
    type: "category",
  },
  {
    name: "Outils IA",
    url: "/outils-ia",
    category: "Catégorie",
    description: "Outils d'intelligence artificielle, voix IA et automatisation.",
    keywords: ["outils IA", "voix IA", "automatisation", "intelligence artificielle"],
    aliases: ["IA", "Intelligence artificielle"],
    type: "category",
  },
  {
    name: "Bons plans",
    url: "/bons-plans",
    category: "Catégorie",
    description: "Offres, promotions, parrainages, cashback et réductions à vérifier.",
    keywords: ["bons plans", "promotions", "codes promo", "cashback", "parrainage"],
    aliases: ["Promotions", "Bonus"],
    type: "category",
  },
] satisfies SearchItem[];

export const PLATFORM_SEARCH_COUNT = searchItems.filter(
  (item) => item.type === "platform",
).length;

export const CATEGORY_SEARCH_COUNT = searchItems.filter(
  (item) => item.type === "category",
).length;

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’'`´.,!?;:()[\]{}_/\\|+*=~"<>@#$%^&€£-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compact(value: string) {
  return normalizeSearchText(value).replace(/\s/g, "");
}

function bestFieldScore(query: string, queryCompact: string, values: string[], base: number) {
  return values.reduce((bestScore, value) => {
    const normalizedValue = normalizeSearchText(value);
    const compactValue = compact(value);

    if (normalizedValue === query) {
      return Math.max(bestScore, base);
    }

    if (compactValue === queryCompact) {
      return Math.max(bestScore, base - 20);
    }

    if (normalizedValue.startsWith(query)) {
      return Math.max(bestScore, base - 80);
    }

    if (normalizedValue.includes(query) || compactValue.includes(queryCompact)) {
      return Math.max(bestScore, base - 140);
    }

    return bestScore;
  }, 0);
}

function tokenCoverageScore(tokens: string[], item: SearchItem) {
  const haystack = normalizeSearchText(
    [
      item.name,
      item.category,
      item.description,
      ...(item.aliases ?? []),
      ...(item.keywords ?? []),
    ].join(" "),
  );

  if (tokens.length === 0 || !tokens.every((token) => haystack.includes(token))) {
    return 0;
  }

  return 120 + Math.min(tokens.length, 4) * 12;
}

export function searchSiteItems(query: string, limit = 8): SearchItem[] {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return [];
  }

  const queryCompact = compact(normalizedQuery);
  const tokens = normalizedQuery.split(" ").filter(Boolean);

  return searchItems
    .map((item): RankedSearchItem => {
      const score = Math.max(
        bestFieldScore(normalizedQuery, queryCompact, [item.name], 1000),
        bestFieldScore(normalizedQuery, queryCompact, item.aliases ?? [], 860),
        bestFieldScore(normalizedQuery, queryCompact, item.keywords ?? [], 650),
        bestFieldScore(normalizedQuery, queryCompact, [item.category], 560),
        bestFieldScore(normalizedQuery, queryCompact, [item.description], 420),
        tokenCoverageScore(tokens, item),
      );

      return {
        ...item,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((first, second) => {
      if (second.score !== first.score) {
        return second.score - first.score;
      }

      if (first.type !== second.type) {
        return first.type === "platform" ? -1 : 1;
      }

      return first.name.localeCompare(second.name, "fr");
    })
    .slice(0, limit)
    .map((item) => ({
      name: item.name,
      url: item.url,
      category: item.category,
      description: item.description,
      keywords: item.keywords,
      aliases: item.aliases,
      type: item.type,
    }));
}
