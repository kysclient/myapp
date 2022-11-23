import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { INFTTransfers, NFTTransfers } from 'components/templates/transfers/NFT';

const NFTTransfersPage: NextPage<INFTTransfers> = (props) => {
  return (
    <Default pageName="NFT Transfers">
      <NFTTransfers {...props} />
    </Default>
  );
};



export default NFTTransfersPage;
