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
    sources: [
      {
        label: "Autorisation MiCA de Foris DAX MT Limited — Crypto.com",
        url: "https://crypto.com/fr-fr/company-news/mica-change-in-license",
      },
      {
        label: "Conditions de l’application et du site — Crypto.com",
        url: "https://crypto.com/document/mco_services.pdf",
      },
    ],
  },
  {
    name: "Coinbase",
    path: "/crypto/coinbase",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Autorisation MiCA et migration dans l’EEE — Coinbase",
        url: "https://help.coinbase.com/fr/coinbase/other-topics/other/mica-cblu",
      },
      {
        label: "Licences et entités européennes — Coinbase",
        url: "https://www.coinbase.com/fr-fr/legal/licenses/europe",
      },
    ],
  },
  {
    name: "Ledger",
    path: "/crypto/ledger",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Conditions d’utilisation de Ledger Wallet — Ledger",
        url: "https://shop.ledger.com/fr/pages/ledger-live-terms-of-use",
      },
      {
        label: "Mentions légales et entité Ledger SAS — Ledger",
        url: "https://www.ledger.com/fr/legal-center",
      },
    ],
  },
  {
    name: "Nexo",
    path: "/crypto/nexo",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Organisation MiCA des services dans l’EEE — Nexo",
        url: "https://nexo.com/eea/mica-faq",
      },
      {
        label: "Entités, produits et avertissements dans l’EEE — Nexo",
        url: "https://nexo.com/eea/buy-crypto",
      },
    ],
  },
  {
    name: "Kraken",
    path: "/crypto/kraken",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Licences et autorités de contrôle — Kraken",
        url: "https://support.kraken.com/articles/where-is-kraken-licensed-or-regulated",
      },
      {
        label: "Conditions de service pour l’EEE — Kraken",
        url: "https://assets-cms.kraken.com/files/51n36hrp/facade/e7cb2e6758f56b3eaa044d4b0b8097f2d1252a63.pdf",
      },
    ],
  },
  {
    name: "SwissBorg",
    path: "/crypto/swissborg",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Agrément CASP de BlockNodes SAS — AMF",
        url: "https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-blanches/psca/blocknodes-sas",
      },
      {
        label: "Structure juridique, juridictions et licences — SwissBorg",
        url: "https://help.swissborg.com/hc/fr-fr/articles/360015167634-SwissBorg-Structure-juridique-juridiction-et-licences",
      },
      {
        label: "Conditions d’utilisation et risques des rendements — SwissBorg",
        url: "https://swissborg.com/legal/swissborg-app-terms-of-use",
      },
    ],
  },
  {
    name: "Waltio",
    path: "/crypto/waltio",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Mentions légales et limites du logiciel — Waltio",
        url: "https://www.waltio.com/fr/informations-legales/",
      },
      {
        label: "Version belge du logiciel fiscal — Waltio",
        url: "https://www.waltio.com/be-fr/",
      },
    ],
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
    sources: [
      {
        label: "Agrément CASP A2026-020 de Meria SAS — AMF",
        url: "https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-blanches/psca/meria-sas",
      },
      {
        label: "Registre européen des prestataires MiCA — ESMA",
        url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      },
    ],
  },
  {
    name: "Deblock",
    path: "/crypto/deblock",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Agrément CASP A2025-001 de Deblock SAS — AMF",
        url: "https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-blanches/psca/deblock-sas",
      },
      {
        label: "Conditions générales et agrément ACPR — Deblock",
        url: "https://cdn1.deblock.com/terms/personal-terms/FR/20260319-v13.1-personal-terms-FR.docx.pdf",
      },
    ],
  },
  {
    name: "Bitpanda",
    path: "/crypto/bitpanda",
    reviewedAt: "2026-08-04",
    sources: [
      {
        label: "Autorisation CASP de Bitpanda GmbH — FMA",
        url: "https://www.fma.gv.at/en/granting-of-authorisation-bitpanda-gmbh/",
      },
      {
        label: "Entités et cadres réglementaires — Bitpanda",
        url: "https://www.bitpanda.com/fr/legal/legal-notice",
      },
    ],
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
    reviewedAt: "2026-08-15",
    sources: [
      { label: "Site officiel de TradingView", url: "https://fr.tradingview.com/" },
      {
        label: "Programme partenaire TradingView",
        url: "https://www.tradingview.com/partner-program/",
      },
      {
        label: "Règles du programme partenaire TradingView",
        url: "https://www.tradingview.com/partner-rules/",
      },
    ],
  },
  {
    name: "Simply Wall St",
    path: "/investissement/simply-wall-st",
    reviewedAt: "2026-08-29",
    sources: [
      {
        label: "Recherche d’actions Simply Wall St",
        url: "https://simplywall.st/features/stock-research",
      },
      {
        label: "Portfolio Demo officiel",
        url: "https://simplywall.st/portfolio/demo",
      },
      {
        label: "Plans et fonctionnalités Simply Wall St",
        url: "https://simplywall.st/plans",
      },
      {
        label: "Sources des données et modèle d’analyse",
        url: "https://simplywall.st/analysis-and-financial-data-sources",
      },
      {
        label: "Conditions générales Simply Wall St",
        url: "https://simplywall.st/terms-and-conditions",
      },
    ],
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
    name: "Lendermarket",
    path: "/investissement/lendermarket",
    reviewedAt: "2026-08-29",
    sources: [
      { label: "Site officiel de Lendermarket", url: "https://lendermarket.com/fr" },
      {
        label: "Centre d’aide officiel de Lendermarket",
        url: "https://lendermarket.com/fr/centre-daide",
      },
      {
        label: "Programme partenaire officiel de Lendermarket",
        url: "https://lendermarket.com/affiliate-programme",
      },
      {
        label: "Avertissement officiel sur les risques",
        url: "https://assets.lendermarket.com/docs/Lendermarket-Limited-Risk-Disclosure-Statement-Apr-2026.pdf",
      },
    ],
  },
  {
    name: "7harvests",
    path: "/investissement/7harvests",
    reviewedAt: "2026-08-29",
    sources: [
      { label: "Site officiel de 7harvests", url: "https://7harvests.ch/" },
      {
        label: "Fonctionnement officiel de 7harvests",
        url: "https://7harvests.ch/how-it-works/",
      },
      {
        label: "Conditions générales de 7harvests",
        url: "https://7harvests.ch/general-terms-conditions/",
      },
      { label: "FAQ officielle de 7harvests", url: "https://7harvests.ch/faq/" },
      {
        label: "Présentation officielle des prêts P2P et de leurs risques",
        url: "https://7harvests.ch/what-p2p-lending-is-and-the-parts-nobody-puts-in-the-brochure/",
      },
      {
        label: "Présentation officielle du bonus de bienvenue",
        url: "https://7harvests.ch/your-first-investment-comes-with-e21-from-us/",
      },
      {
        label: "Cadre des organisations d’autorégulation suisses",
        url: "https://www.finma.ch/en/authorisation/self-regulatory-organisations-sros/",
      },
    ],
  },
  {
    name: "Loanch",
    path: "/investissement/loanch",
    reviewedAt: "2026-08-30",
    // Early Bird Returns (septembre 2026) : communication partenaire, sans source publique officielle lors de la revue.
    sources: [
      { label: "Site officiel de Loanch en français", url: "https://loanch.com/fr" },
      {
        label: "Présentation officielle du bonus de premier investissement",
        url: "https://loanch.com/blog/the-first-investment-bonus-is-here-with-instant-e20-credit",
      },
      {
        label: "Conditions générales de Loanch — mai 2026",
        url: "https://loanch.com/docs/terms-and-conditions-loanch-may-2026.pdf",
      },
      {
        label: "Fiche d’information précontractuelle de Loanch",
        url: "https://loanch.com/docs/pre-contractual-information-sheet.pdf",
      },
      {
        label: "Déclaration officielle sur les risques",
        url: "https://loanch.com/docs/risk-statement.pdf",
      },
      { label: "FAQ officielle de Loanch", url: "https://loanch.com/faq" },
      {
        label: "Présentation officielle des originators",
        url: "https://loanch.com/originators",
      },
    ],
  },
  {
    name: "Mintos",
    path: "/investissement/mintos",
    reviewedAt: "2026-09-06",
    sources: [
      { label: "Site officiel de Mintos", url: "https://www.mintos.com/en/" },
      {
        label: "Présentation officielle de Mintos",
        url: "https://www.mintos.com/en/about-us/about-us/",
      },
      {
        label: "Grille tarifaire officielle de Mintos",
        url: "https://www.mintos.com/en/how-it-works/fees/",
      },
      {
        label: "Minimums d’investissement officiels",
        url: "https://help.mintos.com/hc/en-us/articles/115002859905-What-is-the-minimum-amount-that-can-be-invested",
      },
      {
        label: "Régime d’indemnisation des investisseurs",
        url: "https://help.mintos.com/hc/en-us/articles/115002852609-Are-investments-through-Mintos-protected-by-any-financial-compensation-scheme",
      },
      {
        label: "Conditions générales d’éligibilité",
        url: "https://help.mintos.com/hc/en-us/articles/4422147715729-Who-can-register-and-invest",
      },
      {
        label: "Pays éligibles à Smart Cash",
        url: "https://help.mintos.com/hc/en-us/articles/24419922979473-Who-can-invest-in-Smart-Cash",
      },
      {
        label: "Registre de Latvijas Banka pour AS Mintos Marketplace",
        url: "https://www.bank.lv/en/financial-market-participant-register/market-participants/mintos-marketplace-as",
      },
    ],
  },
  {
    name: "InRento",
    path: "/investissement/inrento",
    reviewedAt: "2026-08-29",
    sources: [
      { label: "Site officiel d’InRento", url: "https://inrento.com/" },
      { label: "FAQ officielle d’InRento", url: "https://inrento.com/faq/" },
      { label: "Tarifs officiels d’InRento", url: "https://inrento.com/page/price-list/" },
      {
        label: "Registre de la Banque de Lituanie — UAB Inrento",
        url: "https://www.lb.lt/en/sfi-financial-market-participants/uab-inrento",
      },
    ],
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
