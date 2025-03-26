<script lang="ts">
	import Header from 'components/Header.svelte';
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
</script>

<div class="m-0 p-0 no-scrollbar min-h-screen">
	<Header />

	<slot />
</div>
<Toaster position="top-center" />
