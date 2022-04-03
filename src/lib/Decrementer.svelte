<script>
	import { counter } from '$lib/counterStore.js';

	function decrementCount() {
		counter.update((n) => n - 1);
	}
</script>

<button on:click="{decrementCount}">- Decrement Counter</button>
