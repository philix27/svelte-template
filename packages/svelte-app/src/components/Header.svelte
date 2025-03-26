<script lang="ts">
	import Icon from '@iconify/svelte';
	import { cn } from 'lib/utils';
	let showNav = $state(false);
</script>

<div class="flex items-center justify-between py-2 px-5 bg-primary w-screen">
	<a href="/">
		<div class="flex items-center">
			<img src="/logo.svg" class="size-[50px] rounded-full mr-5" alt="logo" />
		</div>
	</a>
	{#if showNav}
		<Icon
			onclick={() => {
				showNav = false;
			}}
			icon="mdi:close"
			class="size-[27.5px] block md:hidden "
		/>
	{:else}
		<Icon
			onclick={() => {
				showNav = true;
			}}
			icon="mdi:menu"
			class="size-[27.5px] block md:hidden "
		/>
	{/if}

	<div
		class={cn(
			'gap-x-5 items-center static w-fit  md:flex md:z-0 md:top-0  md:bg-none md:flex-row   md:space-y-0 space-y-3',
			showNav ? 'flex fixed z-10 bg-primary left-0 top-[60px] flex-col w-screen' : 'hidden'
		)}
	>
		<a class="md:block hover:text-muted" href="/docs"> Docs </a>
		<a
			class="md:block hover:text-muted"
			href="https://faucet.celo.org/"
			target="_blank"
			rel="noreferrer"
		>
			Faucet
		</a>
		<a
			class="md:block hover:text-muted"
			href="https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.26+commit.8a97fa7a.js"
			target="_blank"
			rel="noreferrer"
		>
			Remix
		</a>
		<a
			class="md:block hover:text-muted"
			href="https://x.com/CeloDevs"
			target="_blank"
			rel="noreferrer"
		>
			Celo Devs
		</a>
		<a
			class="md:block hover:text-muted"
			href="https://www.shadcn-svelte.com/docs/components/accordion"
			target="_blank"
			rel="noreferrer"
		>
			Shadcn
		</a>

		<w3m-core-button balance="hide" icon="hide" />
		<w3m-network-switch />
	</div>
</div>
