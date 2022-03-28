export async function get() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		console.log(posts);
		return {
			status: 200,
			body: { posts }
		};
	} catch (error) {
		console.log(error);
	}
}
