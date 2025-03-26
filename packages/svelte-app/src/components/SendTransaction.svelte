<script lang="ts">
	import { sendTransaction } from '@wagmi/core';
	import { toast } from 'svelte-sonner';
	import { wagmiConfig } from '$lib/web3';
	import { Input } from 'lib/components/ui/input';
	import { Button } from 'lib/components/ui/button';
	import { toBigInt } from 'ethers';

	let amount = $state(1);
	let address = $state('');

	function send() {
		if (address.length < 24) {
			toast.error('Enter a valid wallet address');
			return;
		}

		if (amount <= 0) {
			toast.error('Amount must be greater than zero');
			return;
		}

		try {
			sendTransaction(wagmiConfig, {
				value: toBigInt(amount),
				to: address as `0x${string}`
			}).then((res) => {
				toast.success('Sent successfully');
			});
		} catch (error) {}
	}
</script>

<div class="bg-accent py-2 w-full">
	<div class="space-y-4">
		<h2 class="font-bold text-lg">Send Transaction</h2>

		<div class="space-y-4 w-full flex flex-col items-center">
			<div class="w-full">
				<p>Amount of token</p>
				<Input placeholder="Amount" class="w-full" bind:value={amount} type="number" />
			</div>
			<div class="w-full">
				<p>Receiver's Wallet Address</p>
				<Input placeholder="Receiver address" class="w-full" bind:value={address} />
			</div>

			<Button on:click={send}>Send</Button>
		</div>
	</div>
</div>
