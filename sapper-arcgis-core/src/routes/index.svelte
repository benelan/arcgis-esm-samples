<script>
	import { onMount } from 'svelte';

	let EsriMap;

	onMount(async () => {
			const module = await import('../components/EsriMap.svelte');
			EsriMap = module.default;
	});
</script>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<svelte:component this={EsriMap}/>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
