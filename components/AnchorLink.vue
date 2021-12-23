<template>
  <div @click.prevent="onClick">
    <slot />
  </div>
</template>

<script>
import { anchorHandler } from '~/scripts/utils/anchorScroll'
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
    goToAnchor(href) {
      const target = document.querySelector(href)
      anchorHandler(target)
    },
  },
}
</script>