export type EditorialSource = {
  label: string;
  url: string;
};

export type EditorialEntry = {
  name: string;
  path: string;
  reviewedAt: string;
  sources: EditorialSource[];
};

export const editorialRegistry = [
  {
    name: "Binance",
    path: "/crypto/binance",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Registre MiCA des prestataires de crypto-actifs — ESMA",
        url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      },
      {
        label: "Liste des PSAN radiés — AMF",
        url: "https://www.amf-france.org/fr/espace-professionnels/fintech/mes-relations-avec-lamf/prestataire-de-services-sur-crypto-actifs-psca/liste-des-psan-radies",
      },
    ],
  },
  {
    name: "Bitget",
    path: "/crypto/bitget",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Arrêt des services Bitget en France — Bitget",
        url: "https://www.bitget.com/fr/support/articles/12560603848109",
      },
      {
        label: "Point sur la demande d’agrément MiCA — Bitget",
        url: "https://www.bitget.com/fr/support/articles/12560603885949",
      },
    ],
  },
  {
    name: "Crypto.com",
    path: "/crypto/crypto-com",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Crypto.com", url: "https://crypto.com/fr" }],
  },
  {
    name: "Coinbase",
    path: "/crypto/coinbase",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Coinbase", url: "https://www.coinbase.com/fr/" }],
  },
  {
    name: "Ledger",
    path: "/crypto/ledger",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Ledger", url: "https://www.ledger.com/fr" }],
  },
  {
    name: "Nexo",
    path: "/crypto/nexo",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Nexo", url: "https://nexo.com/fr" }],
  },
  {
    name: "Kraken",
    path: "/crypto/kraken",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Kraken", url: "https://www.kraken.com/fr" }],
  },
  {
    name: "SwissBorg",
    path: "/crypto/swissborg",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de SwissBorg", url: "https://swissborg.com/fr" }],
  },
  {
    name: "Waltio",
    path: "/crypto/waltio",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Waltio", url: "https://www.waltio.com/" }],
  },
  {
    name: "Bybit",
    path: "/crypto/bybit",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Bybit EU et le règlement MiCA — Bybit EU",
        url: "https://www.bybit.eu/en-EU/learn/regulation-and-micar/what-european-crypto-users-should-know-about-bybit-eu-and-micar",
      },
      {
        label: "Bybit EU GmbH — liste blanche AMF",
        url: "https://protectepargne.amf-france.org/acteurs-listes-blanches/psca/bybit-eu-gmbh",
      },
    ],
  },
  {
    name: "HTX",
    path: "/crypto/htx",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Conditions d’utilisation et juridictions exclues — HTX",
        url: "https://www.htx.com/en-in/support/360000298561",
      },
      {
        label: "Registre MiCA des prestataires de crypto-actifs — ESMA",
        url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      },
    ],
  },
  {
    name: "AscendEX",
    path: "/crypto/ascendex",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Avis officiel de cessation des opérations d’AscendEX",
        url: "https://ascendex.com/",
      },
      {
        label: "Mise en garde concernant AscendEX — AMF",
        url: "https://www.amf-france.org/sites/institutionnel/files/pdf/74188/en/ascendex_com.pdf",
      },
    ],
  },
  {
    name: "KuCoin",
    path: "/crypto/kucoin",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Interdiction de commencer les opérations — FMA",
        url: "https://www.fma.gv.at/en/fma-lifts-ban-on-new-business-for-kucoin-eu-exchange-gmbh-however-commencement-of-business-operations-remains-prohibited/",
      },
      {
        label: "Mise à jour des services KuCoin EU — KuCoin",
        url: "https://www.kucoin.com/en-eu/announcement/en-kucoin-eu-update",
      },
    ],
  },
  {
    name: "Meria",
    path: "/crypto/meria",
    reviewedAt: "2026-08-04",
    sources: [],
  },
  {
    name: "Deblock",
    path: "/crypto/deblock",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Deblock", url: "https://deblock.com/fr-FR" }],
  },
  {
    name: "Bitpanda",
    path: "/crypto/bitpanda",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Bitpanda", url: "https://www.bitpanda.com/fr" }],
  },
  {
    name: "Revolut",
    path: "/banques-en-ligne/revolut",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Centre d’aide officiel de Revolut Belgique",
        url: "https://help.revolut.com/fr-BE/",
      },
    ],
  },
  {
    name: "N26",
    path: "/banques-en-ligne/n26",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de N26", url: "https://n26.com/fr-fr" }],
  },
  {
    name: "Hello bank!",
    path: "/banques-en-ligne/hello-bank",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Hello bank! Belgique", url: "https://www.hellobank.be/fr" }],
  },
  {
    name: "Qonto",
    path: "/banques-en-ligne/qonto",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Qonto Belgique", url: "https://qonto.com/fr-be" }],
  },
  {
    name: "Green-Got",
    path: "/banques-en-ligne/green-got",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Green-Got", url: "https://green-got.com/compte-courant" }],
  },
  {
    name: "DEGIRO",
    path: "/investissement/degiro",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de DEGIRO", url: "https://www.degiro.fr/" }],
  },
  {
    name: "eToro",
    path: "/investissement/etoro",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’eToro", url: "https://www.etoro.com/fr/" }],
  },
  {
    name: "Finary",
    path: "/investissement/finary",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Finary", url: "https://finary.com/fr" }],
  },
  {
    name: "Interactive Brokers",
    path: "/investissement/interactive-brokers",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’Interactive Brokers", url: "https://www.interactivebrokers.eu/" }],
  },
  {
    name: "TradingView",
    path: "/investissement/tradingview",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de TradingView", url: "https://fr.tradingview.com/" }],
  },
  {
    name: "VeraCash",
    path: "/investissement/veracash",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de VeraCash", url: "https://www.veracash.com/fr/" }],
  },
  {
    name: "Saxo",
    path: "/investissement/saxo",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Saxo Belgique", url: "https://www.home.saxo/fr-be" }],
  },
  {
    name: "Robinhood",
    path: "/investissement/robinhood",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Robinhood Europe", url: "https://robinhood.com/eu/fr/" }],
  },
  {
    name: "GOLD AVENUE",
    path: "/investissement/gold-avenue",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de GOLD AVENUE", url: "https://www.goldavenue.com/fr" }],
  },
  {
    name: "Monefit",
    path: "/investissement/monefit",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Monefit", url: "https://monefit.com/fr-fr/smartsaver/" }],
  },
  {
    name: "BullionVault",
    path: "/investissement/bullionvault",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de BullionVault", url: "https://or.bullionvault.fr/" }],
  },
  {
    name: "Invvest",
    path: "/investissement/invvest",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’Invvest", url: "https://invvest.co/fr" }],
  },
  {
    name: "Trade Republic",
    path: "/investissement/trade-republic",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Trade Republic", url: "https://traderepublic.com/fr-be" }],
  },
  {
    name: "iGraal",
    path: "/cashback/igraal",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’iGraal", url: "https://fr.igraal.com/" }],
  },
  {
    name: "Widilo",
    path: "/cashback/widilo",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Widilo", url: "https://www.widilo.fr/" }],
  },
  {
    name: "eBuyClub",
    path: "/cashback/ebuyclub",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’eBuyClub", url: "https://www.ebuyclub.com/" }],
  },
  {
    name: "Poulpeo",
    path: "/cashback/poulpeo",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Poulpeo", url: "https://www.poulpeo.com/" }],
  },
  {
    name: "Curve Pay",
    path: "/cartes-et-paiements/curve-pay",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Curve", url: "https://www.curve.com/" }],
  },
  {
    name: "Wise",
    path: "/cartes-et-paiements/wise",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Wise Belgique", url: "https://wise.com/be/" }],
  },
  {
    name: "SumUp",
    path: "/cartes-et-paiements/sumup",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de SumUp Belgique", url: "https://www.sumup.com/fr-be/" }],
  },
  {
    name: "Monese",
    path: "/cartes-et-paiements/monese",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Monese", url: "https://www.monese.com/" }],
  },
  {
    name: "myPOS",
    path: "/cartes-et-paiements/mypos",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de myPOS Belgique", url: "https://www.mypos.com/fr-be" }],
  },
  {
    name: "American Express Belgique",
    path: "/cartes-et-paiements/american-express-belgique",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Cartes officielles American Express Belgique", url: "https://www.americanexpress.com/be/fr/cartes/comparer/" }],
  },
  {
    name: "Hostinger",
    path: "/hebergement-web/hostinger",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Hostinger", url: "https://www.hostinger.com/fr" }],
  },
  {
    name: "OVHcloud",
    path: "/hebergement-web/ovh",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Hébergement web officiel d’OVHcloud", url: "https://www.ovhcloud.com/fr/web-hosting/" }],
  },
  {
    name: "Back Market",
    path: "/e-commerce/back-market",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Back Market", url: "https://www.backmarket.fr/fr-fr" }],
  },
  {
    name: "Dealabs",
    path: "/e-commerce/dealabs",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Dealabs", url: "https://www.dealabs.com" }],
  },
  {
    name: "ElevenLabs",
    path: "/outils-ia/elevenlabs",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel d’ElevenLabs", url: "https://elevenlabs.io/" }],
  },
  {
    name: "Make",
    path: "/outils-ia/make",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Make", url: "https://www.make.com/" }],
  },
  {
    name: "n8n",
    path: "/outils-ia/n8n",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de n8n", url: "https://n8n.io/" }],
  },
  {
    name: "Gamma",
    path: "/outils-ia/gamma",
    reviewedAt: "2026-08-04",
    sources: [{ label: "Site officiel de Gamma", url: "https://gamma.app/" }],
  },
] satisfies EditorialEntry[];

export function getEditorialEntry(pathname: string) {
  return editorialRegistry.find((entry) => entry.path === pathname);
}
