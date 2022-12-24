# ArcGIS Core with Sever Side Rendering Frameworks

The samples in this repo were created for a [blog post](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/ssr-esm/), and extend those [provided by Esri](https://github.com/Esri/jsapi-resources/tree/master/esm-samples). The samples integrate the [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) build of the ArcGIS Maps SDK for JavaScript with Server Side Rendering frameworks (plus Svelte, because Svelte is great).

## Get started

Install the modules into your project:

```sh
npm install @arcgis/core
```

Then use `import` statements to load individual modules.

```js
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const map = new EsriMap({
    basemap: 'topo-vector'
});

const view = new MapView({
    container: 'viewDiv',
    map: map
});
```

The samples have their own READMEs for framework specific steps.

## Configure CSS

The final step is to set up the CSS:

```css
@import 'https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css';
```
