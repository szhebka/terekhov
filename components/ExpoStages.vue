<template>
  <div class="stage">
    <div class="center-wrap">
      <div class="stage__list anchors">
        <div ref="stageParent" class="stage__list-wrap">
          <div ref="stageImg" class="stage__img-wrap img-wrap">
            <div>
              <vue-picture url="/img/stage-img.jpg" />
              <vue-picture url="/img/stage-img.jpg" />
              <vue-picture url="/img/stage-img.jpg" />
              <vue-picture url="/img/stage-img.jpg" />
            </div>
          </div>

          <anchor-link
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-one"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№01</div>
              <div class="stage__list-date">1989/2002</div>
            </div>
          </anchor-link>

          <anchor-link
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-two"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№02</div>
              <div class="stage__list-date">2003/2007</div>
            </div>
          </anchor-link>

          <anchor-link
            class="stage__list-row"
            data-anchor-href="periods/#periods__box-three"
          >
            <div class="stage__list-info">
              <div class="stage__list-number">№03</div>
              <div class="stage__list-date">2008/2010</div>
            </div>
          </anchor-link>

          <anchor-link
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

  async mounted() {
    await this.initMouse()
  },

  methods: {
    async initMouse() {
      const { MousemoveParallax } = await import('~/scripts/MousemoveParallax')

      new MousemoveParallax({
        img: this.$refs.stageImg,
        target: this.$refs.stageParent,
      })
    },
  },
}
</script>