<script lang="ts">
	import { signMessage } from '@wagmi/core';
	import { toast } from 'svelte-sonner';
	import { wagmiConfig, account } from '$lib/web3';
	import { Button } from 'lib/components/ui/button';

	let signature: string | undefined = $state<string>('_');
	let label: string = $state<string>('Sign Message');

	async function handleSign() {
		label = 'Signing...';

		console.log('Before sign');
		signMessage(wagmiConfig, {
			message: 'Our message we wish to sign',
			account: $account.address!
		})
			.then((res) => {
				console.log('After sign: res');
				//@ts-expect-error Wagmi Type bug
				if (res !== 'null') {
					signature = res;
					toast.success('Message signed successfully');
				} else {
					toast.error('The signature was rejected');
					signature = '_ personal_sign';
				}
			})
			.catch((e) => {
				console.log('Error happened');
				toast.error(e.message);
			});
	}
</script>

<div class="bg-accent py-2 w-full">
	<div class="space-y-4 flex flex-col w-full items-center justify-center">
		<h3 class="font-bold text-lg">Sign Message</h3>
		<p class="text-left text-sm">
			Result: <span class="text-sm"> {signature ?? ''} </span>
		</p>
		<div class="flex w-full items-center justify-center">
			<Button on:click={handleSign}>Sign message</Button>
		</div>
	</div>
</div>
