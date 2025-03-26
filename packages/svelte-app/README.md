# Sveltekit | Celo Composer

This is a community-created and maintained starter kit, designed to help you quickly launch your project on the Celo blockchain. It comes preconfigured with TailwindCSS for styling, WalletConnect for seamless wallet integration, and Wagmi for handling on-chain transactions.

## Setup & Installation

1. Create a copy of `.env.example` and rename it to `.env`.

2. Create a WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/). Provide the WalletConnect Cloud Project ID in your `.env` file to use WalletConnect in your project. As shown in the `.env.example` file.

```bash
VITE_WALLET_CONNECT_ID=YOUR_EXAMPLE_PROJECT_ID;
```

3. Install dependencies: Run  the command based on your package manager

```bash
# using yarn
yarn 

# using npm
npm i
```

> This starterkit does not include connection of Hardhat/Truffle with Sveltekit. It's up to the user to integrate smart contract with Sveltekit. This gives user more flexibility over the dApp.

4. To start the dApp, run the following command.

```bash
# using yarn
yarn dev

# using npm
npm run dev
```

5. Open in browser: `http://localhost:5173/`
## UI Components

To add a component from the [Shadcn library](https://www.shadcn-svelte.com/) run:

```bash
npx shadcn-svelte@latest add <component-name>
```

The component will be added to the `src/libs/components/ui` dir


## Project Structure

```
├── src
│   ├── components (custom components)
│   │   ├── **/*.svelte
│   ├── lib
│   │   ├── components (shadcn components)
│   │   │   └── ui
│   │   │       ├── button
│   │   │       │     └── button.svelte
│   │   │       └── input
│   │   ├── utils
│   │   ├── web3 (Wagmi and web3 config files)
│   └── routes
│       ├── +page.svelte
│       └── docs
├── static (public files)
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