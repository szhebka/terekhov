<template>
  <section class="biography">
    <div class="center-wrap">
      <h2 class="biography__title">
        {{ bio.title }}
      </h2>
      <div class="biography__img-wrap img-wrap img-wrap--contain">
        <div>
          <vue-picture
            :url="bio.picture.filename"
            :class="[isHovered && 'bio-img--active']"
          />
        </div>
      </div>
      <nuxt-link class="biography__link" :to="getLink">{{
        bio.link_text
      }}</nuxt-link>
    </div>
  </section>
</template>

<script>
import VuePicture from '~/components/ThePicture.vue'
import { getLink } from '~/scripts/utils/getLink'
export default {
  components: { VuePicture },
  props: {
    bio: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },

  computed: {
    getLink() {
      return this.localePath(
        getLink(this.bio.link)
          .replace(`//${this.$i18n.locale}/`, '')
          .replace('/', '')
      )
    },
  },

  methods: {
    onMouseEnter() {
      this.isHovered = true
    },
    onMouseLeave() {
      this.isHovered = false
    },
  },
}
</script>