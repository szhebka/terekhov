<template>
  <div @click.prevent="onClick">
    <slot />
  </div>
</template>

<script>
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
        setTimeout(() => {
          this.goToAnchor(href)
        }, 3000)
      })
    },
    goToAnchor(href) {
      const target = document.querySelector(href)

      const startLocation = window.pageYOffset
      const endLocation = target.offsetTop

      const distance = endLocation - startLocation + window.innerHeight / 4

      if (window.innerWidth >= 1024) {
        window.ss.state.target = distance
      } else {
        const $sc = document.querySelector('#scroll-container')
        $sc.scrollTop = distance
      }
    },
  },
}
</script>