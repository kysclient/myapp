import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/kysclient-dark.svg' : '/kysclient-light.svg'}
      height={100}
      width={150}
      alt="kysclient"
    />
  );
};

export default MoralisLogo;
