<script context="module">
	// export const prerender = false;
	// export const hydrate = false;

	export async function load() {
		const url = 'https://jsonplaceholder.typicode.com/posts';
		const response = await fetch(url);

		const data = await response.json();
		// console.log(data);

		return {
			status: response.status,
			props: {
				posts: data
			}
		};
	}
</script>

<script>
	import { counter } from '$lib/counterStore.js';
	import Incrementer from '$lib/Incrementer.svelte';
	import Decrementer from '$lib/Decrementer.svelte';
	import Resetter from '$lib/Resetter.svelte';

	let countValue;

	counter.subscribe((value) => {
		countValue = value;
	});

	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div style="margin-top:4rem;"></div>
<h1 class="text-4xl py-4">Welcome to SvelteKit</h1>
<p class="text-2xl py-3">
	Visit <a class="text-red-400" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div style="margin-top:4rem;"></div>
<p>Counter : {countValue}</p>
<Incrementer />
<Decrementer />
<Resetter />

<div style="margin-top:4rem;"></div>
{#each posts as post}
	<p>Post ID : {post.id}</p>
	<p>User ID : {post.userId}</p>
	<p>Post Title : {post.title}</p>
	<p>Post Data : {post.body}</p>
	<hr />
{/each}
