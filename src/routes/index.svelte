<script context="module">
	// export const prerender = false;
	export const hydrate = false;

	export async function load() {
		const url = 'https://jsonplaceholder.typicode.com/posts';
		const response = await fetch(url);

		const data = await response.json();
		console.log(data);

		return {
			status: response.status,
			props: {
				posts: data
			}
		};
	}
</script>

<script>
	let count = 0;

	function increaseCount() {
		count++;
	}

	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="text-4xl py-4">Welcome to SvelteKit</h1>
<p class="text-2xl py-3">
	Visit <a class="text-red-400" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<p>Counter : {count}</p>
<button on:click="{increaseCount}">Increase Count</button>

<hr />

{#each posts as post}
	<p>Post ID : {post.id}</p>
	<p>User ID : {post.userId}</p>
	<p>Post Title : {post.title}</p>
	<p>Post Data : {post.body}</p>
	<hr />
{/each}
