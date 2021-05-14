const colors = {
  background: {
    app: "#70c1ff", // a shade of "sky blue"
    button: "#0084ff", // a shade of "pure blue"
    card: "#63a9ff", // a darker shade of "sky blue"
    os: "#49006b", // a shade of "dark purple"
  },
  border: {
    dark: "#000000", // "black"
    light: "#7d7d7d", // a shade of "gray"
    signal: "#00bfff", // a light shade of "blue"
  },
  signal: {
    error: "#e6192a", // a shade of "red"
    main: "#47ffea", // a shade of "turquoise"
  },
  text: {
    faded: "#9A9A9A", // a shade of "gray"
    main: "#C0C0C0", // a brighter shade of "gray"
  },
};

export const unknownNetworkPathId = "";

export const NetworkProtocols = Object.freeze({
  ETHEREUM: "ethereum",
  UNKNOWN: "unknown",
});

// accounts for which the network couldn't be found (failed migration, removed network)
export const UnknownNetworkKeys = Object.freeze({
  UNKNOWN: "unknown",
});

// ethereumChainId is used as Network key for Ethereum networks
/* eslint-disable sort-keys */
export const EthereumNetworkKeys = Object.freeze({
  FRONTIER: "1",
  ROPSTEN: "3",
  RINKEBY: "4",
  GOERLI: "5",
  KOVAN: "42",
  CLASSIC: "61",
});

const ethereumNetworkBase = {
  [EthereumNetworkKeys.FRONTIER]: {
    color: "#8B94B3",
    ethereumChainId: EthereumNetworkKeys.FRONTIER,
    order: 101,
    secondaryColor: colors.background.card,
    title: "Ethereum",
  },
  [EthereumNetworkKeys.CLASSIC]: {
    color: "#1a4d33",
    ethereumChainId: EthereumNetworkKeys.CLASSIC,
    order: 102,
    secondaryColor: colors.background.card,
    title: "Ethereum Classic",
  },
  [EthereumNetworkKeys.ROPSTEN]: {
    ethereumChainId: EthereumNetworkKeys.ROPSTEN,
    order: 104,
    title: "Ropsten Testnet",
  },
  [EthereumNetworkKeys.GOERLI]: {
    ethereumChainId: EthereumNetworkKeys.GOERLI,
    order: 105,
    title: "Görli Testnet",
  },
  [EthereumNetworkKeys.KOVAN]: {
    ethereumChainId: EthereumNetworkKeys.KOVAN,
    order: 103,
    title: "Kovan Testnet",
  },
};

const ethereumDefaultValues = {
  color: "#434875",
  protocol: NetworkProtocols.ETHEREUM,
  secondaryColor: colors.background.card,
};

export const ETHEREUM_NETWORK_LIST = Object.freeze(
  setDefault(ethereumNetworkBase, ethereumDefaultValues)
);