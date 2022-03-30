<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="container border">
	<Navbar />
	<slot />
</main>

<style>
	.container {
		margin: 0;
		padding: 0;
		border: 4px solid blue;
	}
</style>
