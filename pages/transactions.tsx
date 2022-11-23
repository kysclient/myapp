import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { ITransactions, Transactions } from 'components/templates/transactions';

const TransactionsPage: NextPage<ITransactions> = (props) => {
  return (
    <Default pageName="Transactions">
      <Transactions {...props} />
    </Default>
  );
};


export default TransactionsPage;
