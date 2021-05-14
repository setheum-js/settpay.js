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
  UNKNOWN: "unknown",
});

// accounts for which the network couldn't be found (failed migration, removed network)
export const UnknownNetworkKeys = Object.freeze({
  UNKNOWN: "unknown",
});
