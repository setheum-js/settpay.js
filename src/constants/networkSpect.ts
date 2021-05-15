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
  SUBSTRATE: "substrate",
  UNKNOWN: "unknown",
});

// accounts for which the network couldn't be found (failed migration, removed network)
export const UnknownNetworkKeys = Object.freeze({
  UNKNOWN: "unknown",
});

// TODO: Separate Test Networks from Main Networks

// Ethereum --------------------------------------------------------
//
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

// Substrate Networks --------------------------------------------------------
//
/* eslint-enable sort-keys */
// genesisHash is used as Network key for Substrate networks
export const SubstrateNetworkKeys = Object.freeze({
  KUSAMA: "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe", // https://polkascan.io/pre/kusama-cc3/block/0
  KUSAMA_CC2:
    "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
  KUSAMA_DEV:
    "0x5e9679182f658e148f33d3f760f11179977398bb3da8d1f0bf7b267fe6b3ebb0",
  POLKADOT:
    "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
  SUBSTRATE_DEV:
    "0x0d667fd278ec412cd9fccdb066f09ed5b4cfd9c9afa9eb747213acb02b1e70bc", // substrate --dev commit ac6a2a783f0e1f4a814cf2add40275730cd41be1 hosted on wss://dev-node.substrate.dev .
  WESTEND: "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
  });


const substrateNetworkBase = {
  [SubstrateNetworkKeys.KUSAMA]: {
    color: "#000",
    decimals: 12,
    genesisHash: SubstrateNetworkKeys.KUSAMA,
    order: 2,
    pathId: "kusama",
    prefix: 2,
    title: "Kusama",
    unit: "KSM",
  },
  [SubstrateNetworkKeys.KUSAMA_CC2]: {
    color: "#000",
    decimals: 12,
    genesisHash: SubstrateNetworkKeys.KUSAMA,
    order: 2,
    pathId: "kusama_CC2",
    prefix: 2,
    title: "Kusama",
    unit: "KSM",
  },
  [SubstrateNetworkKeys.KUSAMA_DEV]: {
    color: "#000",
    decimals: 12,
    genesisHash: SubstrateNetworkKeys.KUSAMA_DEV,
    order: 99,
    pathId: "kusama_dev",
    prefix: 2,
    title: "Kusama Development",
    unit: "KSM",
  },
  [SubstrateNetworkKeys.POLKADOT]: {
    color: "#E6027A",
    decimals: 12,
    genesisHash: null,
    order: 1,
    pathId: "polkadot",
    prefix: 0,
    title: "Polkadot",
    unit: "DOT",
  },
  [SubstrateNetworkKeys.SUBSTRATE_DEV]: {
    color: "#18FFB2",
    decimals: 12,
    genesisHash: SubstrateNetworkKeys.SUBSTRATE_DEV,
    order: 100,
    pathId: "substrate_dev",
    prefix: 42,
    title: "Substrate Development",
    unit: "UNIT",
  },
  [SubstrateNetworkKeys.WESTEND]: {
    color: "#660D35",
    decimals: 12,
    genesisHash: SubstrateNetworkKeys.WESTEND,
    order: 3,
    pathId: "westend",
    prefix: 42,
    title: "Westend",
    unit: "WND",
  },
};

// Unknown Networks ----------------------------------------------------
//
const unknownNetworkBase = {
  [UnknownNetworkKeys.UNKNOWN]: {
    color: colors.signal.error,
    order: 99,
    pathId: unknownNetworkPathId,
    prefix: 2,
    protocol: NetworkProtocols.UNKNOWN,
    secondaryColor: colors.background.card,
    title: "Unknown network",
  },
};

const substrateDefaultValues = {
  color: "#4C4646",
  protocol: NetworkProtocols.SUBSTRATE,
  secondaryColor: colors.background.card,
};

export const SUBSTRATE_NETWORK_LIST = Object.freeze(
  setDefault(substrateNetworkBase, substrateDefaultValues)
);
export const UNKNOWN_NETWORK = Object.freeze(unknownNetworkBase);

const substrateNetworkMetas = Object.values({
  ...SUBSTRATE_NETWORK_LIST,
  ...UNKNOWN_NETWORK,
});
export const PATH_IDS_LIST = substrateNetworkMetas.map(
  (meta: any) => meta.pathId
);

// networks list
export const NETWORK_LIST = Object.freeze(
  Object.assign(
    {},
    SUBSTRATE_NETWORK_LIST,
    ETHEREUM_NETWORK_LIST,
    UNKNOWN_NETWORK
  )
);

// set default network base
function setDefault(networkBase, defaultProps) {
  return Object.keys(networkBase).reduce((acc, networkKey) => {
    return {
      ...acc,
      [networkKey]: {
        ...defaultProps,
        ...networkBase[networkKey],
      },
    };
  }, {});
}

// the default network
export const defaultNetworkKey = SubstrateNetworkKeys.POLKADOT;