# ArcGIS Core with SvelteKit

The ArcGIS Maps SDK for JavaScript can not render a map on the server, since it does not have access to the DOM. Therefore, you need to disable SSR for the map component. You can do this by dynamically importing the component in `onMount()`. Read [SvelteKit's FAQ answer about client side libraries](https://kit.svelte.dev/faq#integrations-how-do-i-use-a-client-side-only-library-that-depends-on-document-or-window) for more info.

```html
<script>
  import { onMount } from 'svelte';
  let EsriMap;

  onMount(async () => {
    const module = await import('../components/EsriMap.svelte');
    EsriMap = module.default;
  });
</script>
```

---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
