import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Me',
    href: '/aboutme',
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      {
        label: 'Coin',
        subLabel: 'coin info app',
        href: '/projects/coin',
        logo: 'lazyNft',
      },
      {
        label: 'ToDo List',
        subLabel: 'crud todo list app ',
        href: '/projects/toDoList',
        logo: 'servers',
      },
      {
        label: 'Animation',
        subLabel: 'animation',
        href: '/projects/animation',
        logo: 'wizard',
      },
      {
        label: 'netflix',
        subLabel: 'netflix clone app',
        href: '/projects/netflix',
        logo: 'chest',
      },
    ],
  },
  // {
  //   label: 'Balances',
  //   href: '/balances',
  //   children: [
  //     {
  //       label: 'ERC20',
  //       subLabel: 'Get your ERC20 balances',
  //       href: '/balances/erc20',
  //       logo: 'token',
  //     },
  //     {
  //       label: 'NFT',
  //       subLabel: 'Get your ERC721 an ERC1155 balances',
  //       href: '/balances/nft',
  //       logo: 'pack',
  //     },
  //   ],
  // },
];

export default NAV_LINKS;
