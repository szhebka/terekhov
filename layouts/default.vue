<template>
  <div id="app">
    <div id="scroll-container">
      <Header />
      <Nuxt />
      <div id="gl"></div>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import Header from '~/components/Header'
export default {
  components: {
    Header,
  },

  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }

    this.winSizes()

    const { Scetch } = await import('@emotionagency/glhtml')
    const { SmoothScroll } = await import('@emotionagency/smoothscroll')

    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 1024,
      passive: false,
      isFixed: false,
      friction: 0.03,
      stepSize: 0.9,
      raf,
    })

    if (screen.width > 960) {
      window.scetch = new Scetch('#gl', {
        raf,
        dpr: window.devicePixelRatio,
      })

      emitter.emit('scetchCreated')
    }

    this.parallaxInit()
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

    async parallaxInit() {
      const { Parallax } = await import('~/scripts/Parallax')
      window.parallax = new Parallax()
    },
  },
}
</script>
