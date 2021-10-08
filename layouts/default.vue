<template>
  <div id="app">
    <Header />
    <div id="scroll-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
// import Popup from '~/components/Popup'
export default {
  components: {
    Header,
    // Popup,
  },

  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }

    this.winSizes()

    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')
    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 1024,
      passive: false,
      isFixed: false,
      friction: 0.07,
      stepSize: 0.9,
      raf,
    })
  },

  beforeDestroy() {
    window.ss?.destroy()
  },

  methods: {
    async winSizes() {
      const { winSizes } = await import('~/scripts/utils/winSizes')
      const { resize } = await import('@emotionagency/utils')
      resize.on(winSizes)
    },
  },
}
</script>
