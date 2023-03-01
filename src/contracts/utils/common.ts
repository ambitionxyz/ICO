export type Addresstype = {
  97: string;
  56: string;
};

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) {
    return 97;
  }
  return parseInt(env);
}

export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET) {
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  }
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
};

export const SMART_ADDRESS = {
  CROWD_SALE: { 97: "0x1e5A6C9df290C90bBD46a9BB8c5677B43CEe1259", 56: "" },
  USDT: { 97: "0xd3a8B120349F6Fc598D34CF2Fc91AB1b8578292a", 56: "" },
};
