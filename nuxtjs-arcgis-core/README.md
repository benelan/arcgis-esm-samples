# ArcGIS Core with NuxtJS

## Rendering a Map

The ArcGIS Maps SDK for JavaScript can not render a map on the server, since it does not have access to the DOM. Therefore, you need to disable SSR for the map component. You can do this using Vue's [client only component](https://nuxtjs.org/docs/2.x/features/nuxt-components#the-client-only-component).

```jsx
<client-only>
  <EsriMap />
</client-only>
```

However, `<client-only>` only skips rendering components on the server. The code will still execute, which causes issues due to the absence of the DOM. The solution is to only import the component when on the client.

```js
export default {
  components: {
    EsriMap: () => {
      if (process.client) return import("../components-no-ssr/EsriMap");
    },
  },
};
```

Lastly, you may have noticed that the `EsriMap` component is in the `/components-no-ssr` directory instead of the `/components` one shipped with Nuxt. A great thing about Nuxt is that it automatically imports files from `/components` and creates routes in `/pages`. However, in this case you do not want to import the map component until it is on the client. Therefore, you can create a new directory specifically for the non-SSR components to control when they are imported.

## Non-Map Workflows

If you are not rendering a map, then GIS operations can be done on the server. The caveat is that `@arcgis/core` does not ship with CommonJS modules, in order to keep the package size reasonable. To use the package in Nuxt on the server, you need to transpile the modules by making the following change in `nuxt.config.js`:

```diff
build: {
+    transpile: ["@arcgis/core"]
  }
```

Next, create a simple new component for projection at `/components/Projection.vue`:

```html
<template>
  <p>Check the console for point projection.</p>
</template>

<script>
  import * as pe from "@arcgis/core/geometry/projection.js";
  import Point from "@arcgis/core/geometry/Point.js";

  export default {
    name: "Projection",
    async mounted() {
      pe.load()
        .then(() => {
          console.log(
            pe.project(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON()
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>
```

Lastly, use the new Projection component in `pages/index.vue`:

```diff
-      <client-only>
-        <EsriMap />
-      </client-only>
+      <Projection />
```

The first time you start up the app after making these changes you will see a couple warning messages about file size. It will also take a while to compile, so grab a quick coffee!

**NOTE:** There are currently some issues with transpiling the modules for the Projection component and rendering the EsriMap component at the same time. At this point I'd suggest not mixing the two strategies. Either transpile the modules and work on the server side, or make sure that the code executes on the client, and forgo transpiling.

## Known Issues

This sample is subject to a [known issue](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/webpack#known-issues) with the ArcGIS Maps SDK for JavaScript `4.24`+ and Webpack `4`, which requires adding loaders to handle optional chaining and nullish coalescing.

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

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
