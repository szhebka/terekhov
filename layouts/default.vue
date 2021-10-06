<template>
  <div id="app">
    <div id="scroll-container">
      <Header />
      <main>
        <Nuxt />
      </main>
      <Popup />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Popup from '@/components/Popup'
export default {
  components: {
    Header,
    Popup,
  },

  async mounted() {
    this.winSizes()
    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 960,
      passive: false,
      isFixed: false,
      friction: 0.07,
      stepSize: 0.9,
      raf,
    })
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
