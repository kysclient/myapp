import { Default } from 'components/layouts/Default';
import { ERC20Transfers } from 'components/templates/transfers/ERC20';
import { GetServerSideProps, NextPage } from 'next';
import { IERC20Transfers } from 'components/templates/transfers/ERC20/types';

const ERC20: NextPage<IERC20Transfers> = (props) => {
  return (
    <Default pageName="ERC20 Transfers">
      <ERC20Transfers {...props} />
    </Default>
  );
};



export default ERC20;
