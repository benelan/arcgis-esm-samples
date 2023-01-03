# @arcgis/core with NextJS

The ArcGIS Maps SDK for JavaScript can not render a map on the server, since it does not have access to the DOM. Therefore, you need to disable SSR for the map component:

```js
const EsriMapWithNoSSR = dynamic(() => import('../components/EsriMap'), {
  ssr: false
});
```

This sample also demonstrates passing an [ArcGIS API key](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys) to the map component using [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) in [`pages/index.js`](https://github.com/benelan/arcgis-esm-samples/blob/main/nextjs-arcgis-core/pages/index.js), since it can [only be exported from pages](https://nextjs.org/docs/basic-features/data-fetching/get-static-props#where-can-i-use-getstaticprops). The API key is then passed down to the map component as a prop.

Add your API key to [`.env.local`](https://github.com/benelan/arcgis-esm-samples/blob/main/nextjs-arcgis-core/.env.local) and [uncomment this line](https://github.com/benelan/arcgis-esm-samples/blob/4bae3959b02d6dff79f2b0c322d0f3143f47f625/nextjs-arcgis-core/components/EsriMap.jsx#L22) in the map component. Make sure to follow the [documented best practices](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/security-best-practices/#api-key-security) for managing your API keys.

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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
