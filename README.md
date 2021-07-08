# @arcgis/core

The samples in this repo extend those [provided by Esri](https://github.com/Esri/jsapi-resources/tree/master/esm-samples). The samples integrate the [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) build of the ArcGIS API for JavaScript with various frameworks, module bundlers and build tools. [Here](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/ssr-esm/) is the accompanying blog post.

## Get started

Install the modules into your project:

```js
npm install @arcgis/core
```

Then use `import` statements to load individual modules.

```js
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const map = new EsriMap({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv",
  map: map
});
```

## Configure CSS

The final step is to set up the CSS. Choose a theme and then configure your code to copy the theme files from @arcgis/core/assets/esri/themes/ into your project. Here’s a React example:

```js
@import "https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css";
```
