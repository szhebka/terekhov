<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="url" alt="" :class="imgClass" />
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
    imgClass: {
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