import {Box, Link, Tag, Text} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/kysclient',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Tag style={{marginRight:'10px'}}>
         <Link href={links.github} isExternal alignItems={'center'}>
             ⭐️ This is my {' '} app <ExternalLinkIcon />
        </Link>
        , happy coding!
      </Tag>
      <Tag  style={{marginRight:'10px'}} >
        🙋 You have questions? plz click my contact button {' '}
      </Tag>
      <Tag>
         <Link href={"/aboutme"} isExternal alignItems={'center'}>
             📖 Want to know more about{' '} kysclient <ExternalLinkIcon />
        </Link>
      </Tag>
    </Box>
  );
};

export default Footer;
