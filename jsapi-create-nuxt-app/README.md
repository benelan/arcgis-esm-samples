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

## Rendering a Map

The JS API can not render a map on the server side since it does not have access to the DOM. Therefore, we need to disable SSR for the map component. We can do this using Vue's [client only component](https://nuxtjs.org/docs/2.x/features/nuxt-components#the-client-only-component).

```html
<client-only>
  <EsriMap />
</client-only>
```

However, `<client-only>` only skips rendering components on the server. The code will still execute which causes issues due to the absence of the DOM. The solution is to only import the component when on the client.

```js
export default {
  components: {
    EsriMap: () => {
      if (process.client) return import("../components-no-ssr/EsriMap");
    }
  }
};
```

Lastly, you may have noticed that the `EsriMap` component is in the `components-no-ssr` directory instead of the `components` one shipped with NuxtJS. A great thing about NuxtJS is that it automates importing files from `components` and routing in `pages`. However in this case, we do not want the map component to be imported until we are on the client side. Therefore, we created a new directory specifically for our non-ssr components so we can control when they are imported.

## Non-Map Workflows

If we are not rendering a map, then we do not need the DOM, and our GIS operations can be done on the server. The caveat is that @arcgis/core does not ship with CommonJS modules in order to keep the package size reasonable. In order to use the package in NuxtJS on the server, we need to transpile the modules. To set it up make the following change in `nuxt.config.js`:

```diff
build: {
+    transpile: ["@arcgis/core"]
  }
```

As well as these changes in `pages/index.vue`:

```diff
-      <client-only>
-        <EsriMap />
-      </client-only>
+      <Projection />
```

The first time you start up the app after making these changes you will see a couple warning messages about file size and it will take some time to transpile. This is normal, have patience!


**NOTE:** There are currently some issues with transpiling the modules for the Projection component and rendering the EsriMap component at the same time. At this point I'd suggest not mixing the two strategies. Either transpile the modules and work on the server side, or make sure that the code executes on the client, and forgo transpiling.

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
