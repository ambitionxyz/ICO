import React from "react";
import { Box, Button, HStack, Image, Spinner, Text } from "@chakra-ui/react";

import { IPackage, IWalletInfo } from "../../../_types_";
import { numberFormat } from "../../../utils";

interface IProps {
  pak: IPackage;
  isBuying: boolean;
  rate: number;
  walletInfo?: IWalletInfo;
  onBuy?: () => void;
}
// chi ro cai gi can su dung
export default function InvestCard({
  pak,
  isBuying,
  rate,
  walletInfo,
  onBuy,
}: IProps) {
  return (
    <Box
      w="380px"
      bg="bg.secondary"
      borderRadius="16px"
      overflow="hidden"
      padding="10px"
      border=" 1px solid rgba(254, 223, 86, .6)"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Box
        bgImage={`/${pak.bg}`}
        w="full"
        h="210px"
        borderRadius="16px"
        bgSize="cover"
        bgPos="center"
      />
      <Box
        w="120px"
        h="120px"
        margin="0 auto"
        borderRadius="full"
        marginTop="-60px"
        position="relative"
      >
        <Image
          src={`/${pak.icon}`}
          alt="bnb"
          w="120px"
          h="120px"
          borderRadius="full"
          objectFit="cover"
          border="6px solid rgba(254, 223, 86, .6)"
        />
        <Image
          src="verified.png"
          alt="verified"
          w="40px"
          position="absolute"
          bottom="0px"
          right="0px"
        />
      </Box>

      <Text my="20px" fontSize="24px" fontWeight="bold">
        {pak.name}
      </Text>
      <Button
        disabled
        variant="primary"
        my="20px"
        bg="transparent"
        border="1px solid #fff"
        color="rgba(255,255, 255, 0.7)"
      >
        {numberFormat(pak.amount)} IPT
      </Button>
      <HStack my="15px">
        <Text color="gray">Amount of coins to pay: </Text>
        <Text variant="notoSan" fontSize="16px">
          {numberFormat(pak.amount / rate)} {pak.token}
        </Text>
      </HStack>

      <Button
        w="full"
        variant="primary"
        disabled={!walletInfo?.address || isBuying}
        onClick={onBuy}
      >
        {isBuying ? <Spinner /> : "Buy Now"}
      </Button>
    </Box>
  );
}
