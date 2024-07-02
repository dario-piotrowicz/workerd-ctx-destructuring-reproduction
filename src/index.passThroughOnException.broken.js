export default {
  async fetch(_request, _env, { passThroughOnException }) {
    passThroughOnException();
    throw new Error('Oops');
  },
};
