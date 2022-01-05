<template>
  <div v-if="story.content" class="stage">
    <div class="center-wrap">
      <div class="stage__list anchors">
        <div ref="stageParent" class="stage__list-wrap">
          <div class="stage__images">
            <div
              v-for="(image, idx) in images"
              :key="idx"
              v-multi-ref:child
              :data-s-idx="idx"
              class="stage__img-wrap img-wrap"
            >
              <div class="stage__img-container">
                <vue-picture :url="image.first_picture.filename" />
              </div>
              <div class="stage__img-container">
                <vue-picture :url="image.second_picture.filename" />
              </div>
            </div>
          </div>
          <anchor-link
            v-for="(period, idx) in story.content.periods"
            :key="period._uid"
            v-multi-ref:parent
            :data-parent-idx="idx"
            class="stage__list-row"
            :data-anchor-href="`periods/#period-${idx + 1}`"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№0{{ idx + 1 }}</div>
              <div class="stage__list-date">{{ period.date }}</div>
            </div>
          </anchor-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnchorLink from '~/components/AnchorLink.vue'
import VuePicture from '~/components/ThePicture.vue'

export default {
  components: { AnchorLink, VuePicture },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    story: {
      type: Object,
      default: () => {},
    },
  },

  async mounted() {
    await this.initImages()
  },

  beforeDestroy() {
    this.mp && this.mp.destroy()
  },

  methods: {
    async initImages() {
      if (window.innerWidth > 960) {
        const links = this.$refs.parent
        const images = this.$refs.child

        if (!links || !images) {
          return
        }

        const { ExpoImages } = await import('~/scripts/ExpoImages')

        new ExpoImages(links, images)
      }
    },
  },
}
</script>