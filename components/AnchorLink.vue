<template>
  <div @click.prevent="onClick">
    <slot />
  </div>
</template>

<script>
import { delayPromise } from '~/scripts/utils/delay'
export default {
  methods: {
    onClick(e) {
      const regexp = /.*\//m
      const data = e.currentTarget.getAttribute('data-anchor-href')
      const anchor = data.replace(regexp, '')
      const page = data.match(regexp, '')[0]

      if (this.$route.path === page) {
        this.goToAnchor(anchor)
        return
      }
      this.$router.push(page)
      const href = anchor

      this.$nextTick(() => {
        window.ss.opts.friction = 1
        document.body.style.opacity = 0
        setTimeout(() => {
          this.goToAnchor(href)
        }, 2500)
      })
    },
    async goToAnchor(href) {
      const $sc = document.querySelector('#scroll-container')
      const target = document.querySelector(href)

      const startLocation = window.pageYOffset
      const endLocation = target.offsetTop

      const distance = endLocation - startLocation + window.innerHeight / 4

      document.body.style.opacity = 1
      if (window.innerWidth >= 1024) {
        window.ss.state.target = distance - window.innerHeight / 2
        await delayPromise(1000)
        window.ss.opts.friction = 0.03
      } else {
        $sc.scrollTop = distance - window.innerHeight / 2
      }
    },
  },
}
</script>