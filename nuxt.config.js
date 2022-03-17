export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'text',
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
    "@/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
  ],

  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   css: false,

  //   beforeEnter(el) {
  //     this.$gsap.set(el, {
  //       opacity: 0
  //     })
  //   },

  //   enter(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: 'power2.inOut',
  //       onComplete: done
  //     })
  //   },

  //   leave(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: 'power2.inOut',
  //       onComplete: done
  //     })
  //   }
  // }
}
