import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xfF58FA7C6FDdFd0814c4e5aD2AF26028Bb49466A";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/Fa7M6JC6m45YRm2jE6-6pcI0sfwSYsqR",
  },
};