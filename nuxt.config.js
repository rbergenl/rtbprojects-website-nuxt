import pkg from './package'

export default {
  mode: 'universal',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'RTB Projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '10 years of experience with Cloud, Frontend and Backend web technology.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'icons/favicon.png' },
      { rel: 'preconnect dns-prefetch', type:'font', href: 'https://fonts.googleapis.com/css?family=Dosis', crossorigin: true }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
