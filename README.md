# Workerd ctx destructuring reproduction

This repository simply includes a reproduction of the following behavior (present in the workerd runtime).

Calling methods on the `ctx` object works as expected:
```js
export default {
	async fetch(_request, _env, ctx) {
		ctx.waitUntil(() => {});
		return new Response('Hello World!');
	},
};
```

but trying to destructure `ctx` breaks the methods functionality:
```js
export default {
	async fetch(_request, _env, { waitUntil }) {
		waitUntil(() => {});
		return new Response('Hello World!');
	},
};
```

Resulting in `Illegal invocation` errors:
![illegal invocation error](./Illegal%20invocation%20error.png)

Is this behavior expected? could the functions be improved to allow destructuring? if not, I believe that we should document this behavior to avoid user confusion (and ideally also improve the error message).

## Reproduction steps

To see the reproductions here simply install the dependencies:
```sh
npm i
```
and run on of the following
```sh
npm run dev-waitUntil
npm run dev-waitUntil-broken
npm run dev-passThroughOnException
npm run dev-passThroughOnException-broken
```
to locally see the valid and broken behaviors

> [!NOTE] this are not local only issues but happen in
>         production as well, you can check that by
>         deploying the workers with the respective deploy scripts