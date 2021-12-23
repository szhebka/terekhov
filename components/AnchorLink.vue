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
      this.$router.push({ path: page, query: { anchor } })
    },
    async goToAnchor(href) {
      const $sc = document.querySelector('#scroll-container')
      const target = document.querySelector(href)

      const startLocation = window.pageYOffset
      const endLocation = target.offsetTop

      const distance = endLocation - startLocation + window.innerHeight / 4

      if (window.innerWidth >= 1024) {
        window.ss.state.target = distance - window.innerHeight / 2
        await delayPromise(1000)
      } else {
        $sc.scrollTop = distance - window.innerHeight / 2
      }
    },
  },
}
</script>