# Sveltekit | Celo Composer

This is a community-created and maintained starter kit, designed to help you quickly launch your project on the Celo blockchain. It comes preconfigured with TailwindCSS for styling, WalletConnect for seamless wallet integration, and Wagmi for handling on-chain transactions.

## Setup & Installation

### For svelte-app

1. Install dependencies: Run  the command based on your package manager.

```bash
yarn 
```

> This starterkit does not include connection of Hardhat/Truffle with Sveltekit. It's up to the user to integrate smart contract with Sveltekit. This gives user more flexibility over the dApp.


2. Go into the Svelte-app directory and create a copy of `.env.example` and rename it to `.env`.

3. Create a WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/). Provide the WalletConnect Cloud Project ID in your `.env` file to use WalletConnect in your project. As shown in the `.env.example` file.

```bash
VITE_WALLET_CONNECT_ID=YOUR_EXAMPLE_PROJECT_ID;
```


4. To start the dApp, run the following command.

```bash
yarn app:dev

```

5. Open in browser: `http://localhost:5173/`
6. To test your Smart contract run:

```bash
yarn hardhat:dev
```

## UI Components

To add a component from the [Shadcn library](https://www.shadcn-svelte.com/) run:

```bash
npx shadcn-svelte@latest add <component-name>
```

The component will be added to the `src/libs/components/ui` dir


## Project Structure

```
├── packages
│   ├── svelte-app
│   │   ├── **/*.svelte
│   └── hardhat
│       ├── contract
│       └── test
├── node_modules
├── README.md
├── package.json
├── other_config_files
└── .gitignore

```
## Web3 based operations

This can be carried out using `@wagmi/core` functions. 
The popular Wagmi hooks were designed for React, and are built on `@wagmi/core`. 
Since, wagmi doesn't have a hooks specific to Svelte we use the core library.

`lib/webs/client` wraps some of the `@wagmi/core` functions to a Svelte observable stream.


> When adding an environment variable, prepend `VITE_` to the name of your variable so that vite runtime can easily read it and add it to your app during startup.


## Deploy a Smart Contract

Find the detailed instructions on how to run your smart contract in [packages/hardhat/README.md](./packages/hardhat/README.md).

For quick development follow these three steps:

1. Change `packages/hardhat/env.template` to `packages/hardhat/env` and add your `PRIVATE_KEY` into the `.env` file.
2. Make sure your wallet is funded when deploying to testnet or mainnet. You can get test tokens for deploying it on Alfajores from the [Celo Faucet](https://faucet.celo.org/alfajores).
3. Run the following commands from the `packages/hardhat` folder to deploy your smart contract to the Celo Testnet Alfajores:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network alfajores
```


## Support

Join the Celo Discord server at <https://chat.celo.org>. Reach out on the dedicated repo channel [here](https://discord.com/channels/600834479145353243/941003424298856448).

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/celo-org/celo-composer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

- [@CeloDevs](https://twitter.com/CeloDevs)
- [Discord](https://discord.com/invite/celo)

<p align="right">(<a href="#top">back to top</a>)</p>
