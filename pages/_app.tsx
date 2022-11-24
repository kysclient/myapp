import {ChakraProvider, useColorMode} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import {useEffect} from "react";
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "react-query";
import {isDark} from "@chakra-ui/theme-tools";
import {darkTheme, lightTheme} from "../src/styled-component/theme";
import {ThemeProvider} from "styled-components";


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({config});
const queryClient = new QueryClient();


const MyApp = ({Component, pageProps}: AppProps) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <RecoilRoot>
            <ChakraProvider resetCSS theme={theme}>
                <ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
                </ThemeProvider>
            </ChakraProvider>
        </RecoilRoot>
    );
};

export default MyApp;
