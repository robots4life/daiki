<script>
	import { counter } from '$lib/counterStore.js';

	function incrementCount() {
		counter.update((n) => n + 1);
	}
</script>

<button on:click="{incrementCount}">+ Increment Counter</button>
