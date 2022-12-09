import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { chains, provider } = configureChains(
  [chain.polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "EY Blockchain BIP Tracker",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const queryClient = new QueryClient();

const theme = extendTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;

  return (
    <>
      <ChakraProvider resetCSS={true} theme={theme}>
        <SessionProvider refetchInterval={0} session={session}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitSiweNextAuthProvider>
              <RainbowKitProvider chains={chains}>
                <QueryClientProvider client={queryClient}>
                  <Component {...pageProps} />
                </QueryClientProvider>
              </RainbowKitProvider>
            </RainbowKitSiweNextAuthProvider>
          </WagmiConfig>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
