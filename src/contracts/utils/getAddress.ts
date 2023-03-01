import getChainIdFromEnv, { Addresstype, SMART_ADDRESS } from "./common";

const getAdress = (address: Addresstype) => {
  const CHAIN_ID = getChainIdFromEnv() as keyof Addresstype;
  return address[CHAIN_ID];
};

export const getCrowdSalesAddress = () => getAdress(SMART_ADDRESS.CROWD_SALE);
export const getUsdtAddress = () => getAdress(SMART_ADDRESS.USDT);
