<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="url" alt="" data-gl data-gl-parallax="1" :data-src="fullUrl" />
  </picture>
</template>

<script>
import { imgixTransform } from '~/scripts/utils/imgix'
import { transformImage } from '~/scripts/utils/storyblokImage'
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },

  computed: {
    getWebpUrl() {
      return transformImage(this.url)
    },
    fullUrl() {
      const fullUrl = this.$store.state.app.isWebp ? this.getWebpUrl : this.url
      return imgixTransform(fullUrl)
    },
  },
}
</script>