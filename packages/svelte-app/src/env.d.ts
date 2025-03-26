interface ImportMetaEnv {
	readonly VITE_WALLET_CONNECT_ID: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface Window {
	ethereum: {
		isMiniPay: boolean;
		request: any;
	};
}
