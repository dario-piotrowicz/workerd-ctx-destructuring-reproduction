export default {
  async fetch(_request, _env, ctx) {
    ctx.passThroughOnException();
    throw new Error('Oops');
  },
};
