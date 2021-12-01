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
    width: {
      type: String,
      default: '',
    },
  },

  computed: {
    getWebpUrl() {
      if (!this.width) {
        return transformImage(this.url)
      } else {
        return transformImage(
          this.url,
          `${this.width}x0/filters:quality(92):format(webp)`
        )
      }
    },
  },
}
</script>