// src/pools.ts

// WILL NEED UPDATED AS NEW POOLS ARE ADDED SO WE CAN TRACK
// DECIMALS SINCE REACT UI PACKAGE IS NOT AVAILABLE HERE

export interface PoolConfig {
  [key: string]: {
    name: string;
    symbol: string;
    decimals: number;
    icon: string;
  };
}

const poolsConfig: PoolConfig = {
  "So11111111111111111111111111111111111111112": {
    name: "Solana",
    symbol: "SOL",
    decimals: 9,
    icon: "/icons/sol.svg",
  },
  "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN": {
    name: "Jupiter",
    symbol: "JUP",
    decimals: 6,
    icon: "/icons/jup.svg",
  },
  "ApxJeC9Pv5YbS3Ataq2kAfNeFLafEADVmC49czvFAP93": {
    name: "SolVegas",
    symbol: "SOLVEGAS",
    decimals: 9,
    icon: "/icons/solvegas.svg",
  },
  "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR": {
    name: "Guacamole",
    symbol: "GUAC",
    decimals: 5,
    icon: "/icons/guac.svg",
  },
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v": {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    icon: "/icons/usdc.svg",
  },
  "5yxNbU8DgYJZNi3mPD9rs4XLh9ckXrhPjJ5VCujUWg5H": {
    name: "Fronk",
    symbol: "FRONK",
    decimals: 5,
    icon: "/icons/fronk.svg",
  },
  "DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk": {
    name: "NINJA TURTLES",
    symbol: "NINJA",
    decimals: 8,
    icon: "/icons/ninja.svg",
  },
  "vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm": {
    name: "POND COIN",
    symbol: "PNDC",
    decimals: 5,
    icon: "/icons/pndc.svg",
  },
  "METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr": {
    name: "META",
    symbol: "META",
    decimals: 9,
    icon: "/icons/meta.svg",
  },
  "D9mFkgnZHnQGRtZKvnJ44yvoLtJmfBZRahXiUKcAzRE4": {
    name: "SNOOPYBABE",
    symbol: "SBABE",
    decimals: 6,
    icon: "/icons/sbabe.svg",
  },
  "8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB": {
    name: "Felt Gaming Labs",
    symbol: "GMCOCK",
    decimals: 8,
    icon: "/icons/gmcock.svg",
  },
  "2mnGSkXH1h6x5qmhwoQzAZDKa83vnRf8wNkNWVbdv7w5": {
    name: "Strudels on Solana",
    symbol: "$SOS",
    decimals: 2,
    icon: "/icons/sos.svg",
  },
  "3YT2B16R4EsvKozxRXNuD4dvEChuxeyXLG8yG219TVMz": {
    name: "BeeBets",
    symbol: "BeeBets",
    decimals: 9,
    icon: "/icons/beebets.svg",
  },
  "6QsLcMf558wAbGWHYeNFWWkGXj7W5AYuBxtrHvAeyLxS": {
    name: "MagicInternetBets",
    symbol: "MIB",
    decimals: 9,
    icon: "/icons/mib.svg",
  },
  "8CofuxeTuXjrZSMahW9wYkedVoNcvwua6aJeM1UhxuLh": {
    name: "TESTERCOIN_NOLP",
    symbol: "TSTCOIN",
    decimals: 9,
    icon: "/icons/tstcoin.svg",
  },
};

export default poolsConfig;
