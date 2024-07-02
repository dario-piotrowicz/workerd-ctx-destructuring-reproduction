export default {
	async fetch(_request, _env, ctx) {
		const { waitUntil } = ctx;
		waitUntil(() => {});
		return new Response('Hello World!');
	},
};
