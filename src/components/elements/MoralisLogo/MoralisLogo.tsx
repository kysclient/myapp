import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/myApp.svg' : '/myApp.svg'}
      height={100}
      width={150}
      alt="kysclient"
    />
  );
};

export default MoralisLogo;
