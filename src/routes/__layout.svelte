<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="container border">
	<Navbar />
	<slot />
</main>
