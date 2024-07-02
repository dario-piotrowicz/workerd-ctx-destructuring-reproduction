export default {
	async fetch(_request, _env, ctx) {
		ctx.waitUntil(() => {});
		return new Response('Hello World!');
	},
};
