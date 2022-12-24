export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-arcgis-core',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  build: {
    // transpile: ["@arcgis/core"],
    extend(config) {
      config.module.rules.push({
        test: /\.m?js$/,
        exclude: {
          and: [/node_modules/], // exclude libraries in node_modules ...
          not: [
            // except for ones that needs to be transpiled because they use modern syntax
            /@arcgis[\\/]core/,
          ],
        },
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              // these are required by Webpack 4 since @arcgis/core@4.24
              [
                "@babel/plugin-proposal-nullish-coalescing-operator",
                { loose: true },
              ],
              ["@babel/plugin-proposal-optional-chaining", { loose: true }],
            ],
          },
        },
      });
    },
  },
}
