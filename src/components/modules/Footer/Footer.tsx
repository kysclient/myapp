import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/kysclient',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ This is my {' '} studying
        <Link href={links.github} isExternal alignItems={'center'}>
          projects <ExternalLinkIcon />
        </Link>
        , happy coding!
      </Text>
      <Text>
        🙋 You have questions? plz click my Contact button {' '}
      </Text>
      <Text>
        📖 Want to know more about{' '}
        <Link href={"/"} isExternal alignItems={'center'}>
          kysclient <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
