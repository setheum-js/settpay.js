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
// TODO: Add the SettPay Network and set it as Default Network
// TODO: Add the Setheum Network

// Substrate Networks --------------------------------------------------------
//
/* eslint-enable sort-keys */
// genesisHash is used as Network key for Substrate networks
export const SubstrateNetworkKeys = Object.freeze({
  KUSAMA: "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe", // https://polkascan.io/pre/kusama-cc3/block/0
  POLKADOT:
    "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
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

// TODO: Add the SettPay Network and set it as Default Network
// the default network
export const defaultNetworkKey = SubstrateNetworkKeys.POLKADOT;