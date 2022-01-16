# Simple Safecoin Starter

A starter react web application implementation for Safecoin. Supports typescript. Signs transactions without requiring a background window.

### How we got here

Created with love by taking the Ara's spl-token-wallet and then wrapping it in a craco-based project structure to get something that allows typescript and still resolves the miriad
dependencies to work with BPF contracts / developing on Safecoin. Once that was setup, realized it still could not sign transactions, so implemented direct transactions signing.

### Why we got here

In order to have a simple typescript enabled web-app base upon which to test and/or build more complicated web-apps. Obviously this can not be a production app because you need a trusted wallet.

### Running the UI

Run `yarn` to install dependencies, then run `yarn start` to start a development server or `yarn build` to create a production build that can be served by a static file server.
