<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="url" alt="" data-gl data-gl-parallax="1" :data-src="fullUrl" />
  </picture>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },

  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },
    fullUrl() {
      return this.$store.state.app.isWebp ? this.getWebpUrl : this.url
    },
  },
}
</script>