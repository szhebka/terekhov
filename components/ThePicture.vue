<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="url" alt="" />
  </picture>
</template>

<script>
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
  },
}
</script>