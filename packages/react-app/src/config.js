import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-sepolia.g.alchemy.com/v2/Fa7M6JC6m45YRm2jE6-6pcI0sfwSYsqR",
  },
};