import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { INFTBalances } from 'components/templates/balances/NFT/types';
import { NFTBalances } from 'components/templates/balances/NFT';

const ERC20: NextPage<INFTBalances> = (props) => {
  return (
    <Default pageName="NFT Balances">
      <NFTBalances {...props} />
    </Default>
  );
};


export default ERC20;
