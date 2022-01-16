# Serum DEX UI

An implementation of a UI for the Serum DEX.

### Running the UI

Run `yarn` to install dependencies, then run `yarn start` to start a development server or `yarn build` to create a production build that can be served by a static file server.

### Collect referral fees

If you are hosting a public UI using this codebase, you can collect referral fees when your users trade through your site.

To do so, set the `REACT_APP_USDT_REFERRAL_FEES_ADDRESS` and `REACT_APP_USDC_REFERRAL_FEES_ADDRESS` environment variables to the addresses of your USDT and USDC SPL token accounts.

You may want to put these in local environment files (e.g. `.env.development.local`, `.env.production.local`). See the [documentation](https://create-react-app.dev/docs/adding-custom-environment-variables) on environment variables for more information.

NOTE: remember to re-build your app before deploying for your referral addresses to be reflected.

---

See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for other commands and options.

---

See [A technical introduction to the Serum DEX](https://projectserum.com/blog/serum-dex-introduction) to learn more about the Serum DEX.

See [serum-js](https://github.com/project-serum/serum-js) for DEX client-side code. Serum DEX UI uses this library.

See [sol-wallet-adapter](https://github.com/project-serum/sol-wallet-adapter) for an explanation of how the Serum DEX UI interacts with wallet services to sign and send requests to the Serum DEX.

See [spl-token-wallet](https://github.com/project-serum/spl-token-wallet) for an implementation of such a wallet, live at [sollet.io](https://sollet.io).

Listing Z5XujBvSZNVCHERkzxCQu2veF6WFEcEduQLCToJqtPR ...
Listed market: MarketPubkeys {
market: Z5XujBvSZNVCHERkzxCQu2veF6WFEcEduQLCToJqtPR,
req_q: 9weAGDDz3PaFP1X5tUNbetWYm1GnuxifnbQ3zss18Fjn,
event_q: 3Pf9GFfgHGprP7hqwC146yaEC4dhazJxHRqMSripjKo5,
bids: DsVvw8AddKk3cijehUEwPf9ZraumjJiMnAJtGVj6Gujx,
asks: JAmx25egYGaViYcLyAxCLbksiepTtPBf91wjUQLLyfXD,
coin_vault: E3z5EznRupSF8qWYcv95G17Jz8LZ4c1w9D3Dejkfh2eB,
pc_vault: 5p2sjdmwt9ke7Pva5bSkPp67KS9kC5NiE9dYYNZaHhwh,
vault_signer_key: 5GuvA6qVFzyXmScqqjNA5F6BvRWNvfkAPJu3fjN4G1ez,
}
