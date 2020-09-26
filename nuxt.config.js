/* eslint-disable no-unused-vars */

// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'TS NOTE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ts.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/main.css'],
  loading: {
    color: '#007acc',
    height: '5px'
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: './plugins/fontAwesome.js',
      ssr: false
    },
    {
      src: './plugins/tooltip.js',
      ssr: false
    },
    {
      src: './plugins/drag.js',
      ssr: false
    },
    {
      src: './plugins/vuex_persist.js',
      ssr: false
    },
    {
      src: './plugins/fabric.js',
      ssr: false
    },
    {
      src: './plugins/vue_swal.js',
      ssr: false
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/moment'
  ],
  content: {
    liveEdit: false,
    components: true,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css'
      }
    }
  },
  moment: {
    defaultLocale: 'id',
    locales: ['id'],
    defaultTimezone: 'Asia/Jakarta'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: ['jquery', 'lodash'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash'
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
