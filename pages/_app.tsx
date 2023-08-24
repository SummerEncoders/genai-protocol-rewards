import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import merge from "lodash.merge";
import type { AppProps } from "next/app";
import {
  connectorsForWallets,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  goerli,
  optimism,
  optimismGoerli,
  base,
  baseGoerli,
  zora,
  zoraTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/layout";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    optimism,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [goerli, optimismGoerli, baseGoerli, zoraTestnet]
      : []),
  ],
  [publicProvider()],
);

const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: "#4f46e5",
  },
} as Theme);

const projectId = "79e68291741ebb0e75f64ca1ecaf5770";

const { wallets } = getDefaultWallets({
  appName: "App Name",
  projectId,
  chains,
});

const customAppInfo = {
  appName: "App Name",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={myTheme}
        appInfo={customAppInfo}
        chains={chains}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
