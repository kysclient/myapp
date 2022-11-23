import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { INFTTransfers } from './types';

const NFTTransfers: FC<INFTTransfers> = ({ transfers }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('transfers: ', transfers), [transfers]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        NFT Transfers
      </Heading>
      {transfers?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          test
        </Box>
      ) : (
        <Box>Looks Like you do not have any NFT transfers</Box>
      )}
    </>
  );
};

export default NFTTransfers;
