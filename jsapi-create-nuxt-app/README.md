# ArcGIS API for JavaScript with create-nuxt-app

Integrating Vue with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) does not require much manual configuration. One requirement is having to copy the `@arcgis/core/assets` folder to the build. NuxtJS does not provide a clear method to do this during the build so, you can use [`ncp`](https://www.npmjs.com/package/ncp) to copy the files to the build directory on `postinstall`.

```json
// package.json
{
  "scripts": {
    "copy": "ncp ./node_modules/@arcgis/core/assets ./static/assets",
    "postinstall": "npm run copy",
    ...
  },
}
```

The API does not currently work with SSR, so we need to disable it for the map component. We can do this using Vue's [client only component](https://nuxtjs.org/docs/2.x/features/nuxt-components#the-client-only-component).

```html
<client-only>
  <EsriMap />
</client-only>
```

However, `<client-only>` only skips rendering components on the server side; they will still execute. This causes problems for the API since it requires DOM Elements and doesn't ship with CommonJS modules. The solution is to only import the component when on the client side.

```js
<script>
export default {
  components: {
    EsriMap: () => {
      if (process.client) return import("../components-no-ssr/EsriMap");
    }
  }
};
</script>
```

Lastly, you may have noticed that the `EsriMap` component is in the `components-no-ssr` directory instead of the `components` one shipped with Nuxt. A great thing about Nuxt is that it automates importing files from `components` and routing in `pages`. However in this case, we do not want the map component to be imported until we are on the client side. Therefore, we created a new directory specifically for our non-ssr components so we can control when they are imported.

---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
