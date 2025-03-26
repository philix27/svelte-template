<script lang="ts">
	import { account, modal, getBalance, disconnect, formatEtherRounded } from 'lib/web3';
	import { Network, SignMessage } from 'components';
	import { Button } from 'lib/components/ui/button';
	import { browser } from '$app/environment';
	import SendTransaction from 'components/SendTransaction.svelte';

	$: accountAddress = $account.address;

	$: isMiniPay = false;

	if (browser) {
		if (window && window.ethereum) {
			// User has a injected wallet

			if (window.ethereum.isMiniPay) {
				// User is using Minipay
				isMiniPay = true;
				// Requesting account addresses
				let accounts = window.ethereum.request({
					method: 'eth_requestAccounts',
					params: []
				});

				// Injected wallets inject all available addresses,
				// to comply with API Minipay injects one address but in the form of array
				console.log(accounts[0]);
				// @ts-ignore
				// accountAddress = $account.address;
				accountAddress = accounts[0];
			}

			// User is not using MiniPay
		}
	}

	function shortenAddress(address: string, chars = 4) {
		if (!address || address.length < chars * 2 + 2) {
			return address; // Return original if it's too short
		}
		return `${address.slice(0, chars)}...${address.slice(-chars)}`;
	}

	function connectWallet() {
		modal.open({ view: 'Connect' });
	}
</script>

<div class="md:md-0 w-full flex items-center justify-center">
	<div class="w-[85%] my-5 flex items-center justify-center flex-col">
		<div class=" ">There you go... a canvas for your next Celo project!</div>
		<!-- {#if $account.isConnected || isMiniPay} -->
		{#if $account.isConnected}
			<div class="pt-10 md:pt-0 mx-0 flex flex-col items-center justify-center w-full">
				<p>Your address:</p>
				<p class="text-wrap whitespace-nowrap">
					{shortenAddress($account.address!, 5)}
				</p>
				{#await getBalance($account.address ?? accountAddress!)}
					<p>Balance: ...</p>
				{:then data}
					<p class="text-md">
						Balance: {formatEtherRounded(data.value)}
					</p>
				{/await}
				<Button onclick={disconnect} class="my-5" variant="destructive">Disconnect</Button>
				Extra wallet metadata available when present
				<Network />
				<SignMessage />
				<SendTransaction />
			</div>
		{:else}
			<Button variant="secondary" onclick={connectWallet} class="mt-5">Connect</Button>
		{/if}
	</div>
</div>
