<script>
	import { counter } from '$lib/counterStore.js';
	import Incrementer from '$lib/Incrementer.svelte';
	import Decrementer from '$lib/Decrementer.svelte';
	import Resetter from '$lib/Resetter.svelte';

	let countValue;

	counter.subscribe((value) => {
		countValue = value;
	});
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1>Work</h1>

<div style="margin-top:4rem;"></div>
<p>Counter : {countValue}</p>
<Incrementer />
<Decrementer />
<Resetter />
