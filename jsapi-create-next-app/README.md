# ArcGIS API for JavaScript with create-next-app

Integrating React with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) does not require much manual configuration. The one requirement is having to copy the `@arcgis/core/assets` folder to the build. NextJS does not provide a clear method to do this during the build so, you can use [`ncp`](https://www.npmjs.com/package/ncp) to copy the files to the build directory on `postinstall`.

```json
// package.json
{
  "scripts": {
    "copy": "ncp ./node_modules/@arcgis/core/assets ./public/assets",
    "postinstall": "npm run copy",
    ...
  },
}
```

The ArcGIS JSAPI does not currently work with SSR, so we need to disable it for the map component.
```js
const EsriMapWithNoSSR = dynamic(() => import("../components/EsriMap"), {
  ssr: false,
});
```

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
