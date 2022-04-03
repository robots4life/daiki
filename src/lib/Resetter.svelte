<script>
	import { counter } from '$lib/counterStore.js';

	function resetCount() {
		counter.set(0);
	}
</script>

<button on:click="{resetCount}">0 Reset Counter</button>
