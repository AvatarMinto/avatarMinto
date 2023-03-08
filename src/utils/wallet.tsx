import * as React from 'react';

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon, optimism, arbitrum ,goerli, fantom, fantomTestnet} from "wagmi/chains";
 
import {  createClient, configureChains, WagmiConfig  } from "wagmi";

const { chains, provider } = configureChains(
  [fantomTestnet],
  [
    alchemyProvider({ apiKey: "ShXc42ZtNU325YluVU3P0SsViuEu71Cs" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Wallet = ({children}:any)  => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {children}
        </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Wallet;
