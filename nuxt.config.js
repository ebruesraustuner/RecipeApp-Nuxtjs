export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'recipe-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    plugins: ["@/plugins/aos.client"]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/navbar.scss', '~/assets/styles/variables.scss', 'aos/dist/aos.css'
  ],
  styleResources: {
    scss: ['~/assets/styles/navbar.scss',
    '~/assets/styles/variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/aos.client"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'recipedetails',
        path: '/recipedetails',
        component: resolve(__dirname, 'pages/Recipedetails.vue')
      },
      {
        name: 'blogdetails',
        path: '/Blogdetails',
        component: resolve(__dirname, 'pages/BlogDetails.vue')
      }
      )
    }
  },

}
