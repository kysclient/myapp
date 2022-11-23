import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { ERC20Balances, IERC20Balances } from 'components/templates/balances/ERC20';

const ERC20: NextPage<IERC20Balances> = (props) => {
  return (
    <Default pageName="ERC20 Balances">
      <ERC20Balances {...props} />
    </Default>
  );
};


export default ERC20;
