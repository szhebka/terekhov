<template>
  <div class="stage">
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
                <vue-picture :url="image.a" />
              </div>
              <div class="stage__img-container">
                <vue-picture :url="image.b" />
              </div>
            </div>
          </div>
          <anchor-link
            v-multi-ref:parent
            data-parent-idx="0"
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-one"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№01</div>
              <div class="stage__list-date">1989/2002</div>
            </div>
          </anchor-link>

          <anchor-link
            v-multi-ref:parent
            data-parent-idx="1"
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-two"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№02</div>
              <div class="stage__list-date">2003/2007</div>
            </div>
          </anchor-link>

          <anchor-link
            v-multi-ref:parent
            data-parent-idx="2"
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-three"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№03</div>
              <div class="stage__list-date">2008/2010</div>
            </div>
          </anchor-link>

          <anchor-link
            v-multi-ref:parent
            data-parent-idx="3"
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-four"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№04</div>
              <div class="stage__list-date">2010/2021</div>
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
  computed: {
    images() {
      const images = []

      for (let i = 0; i < 4; i++) {
        images.push({
          a: `/img/stages/${i + 1}a.jpg`,
          b: `/img/stages/${i + 1}b.jpg`,
        })
      }
      return images
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

        const { ExpoImages } = await import('~/scripts/ExpoImages')

        new ExpoImages(links, images)
      }
    },
  },
}
</script>