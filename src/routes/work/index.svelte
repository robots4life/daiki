<script>
	let count = 0;

	function increaseCount() {
		count++;
	}
</script>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1>Work</h1>

<p>Counter : {count}</p>
<button on:click="{increaseCount}">Increase Count</button>
