import pkg from './package'

export default {
  mode: 'universal',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'RTB Projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '10 years of experience with Cloud, Frontend and Backend web technology.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'icons/favicon.png' },
      { rel: 'stylesheet', type:'text/css', href: 'https://fonts.googleapis.com/css?family=Dosis', crossorigin: true },
      { rel: 'stylesheet', type:'text/css', href:'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2d3a4b' },

  /*
  ** Global CSS
  */
  css: [
    '~/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  //  { src: '~/plugins/ng', ssr: false }
    { src: '~/plugins/google-tag-manager', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa']
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
