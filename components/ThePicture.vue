<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="url" alt="" />
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
  },
}
</script>