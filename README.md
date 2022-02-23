# @arcgis/core

The samples in this repo were created for a [blog post](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/ssr-esm/), and extend those [provided by Esri](https://github.com/Esri/jsapi-resources/tree/master/esm-samples). The samples integrate the [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) build of the ArcGIS API for JavaScript with Server Side Rendering frameworks (plus Svelte, because Svelte is great).

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

The final step is to set up the CSS:

```css
@import "https://js.arcgis.com/4.21/@arcgis/core/assets/esri/themes/light/main.css";
```
