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
import { ITransactions } from './types';

const Transactions: FC<ITransactions> = ({ transactions }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');


  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Transactions
      </Heading>
      {transactions?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
       hi
        </Box>
      ) : (
        <Box>Looks Like you do not have any transactions</Box>
      )}
    </>
  );
};

export default Transactions;
