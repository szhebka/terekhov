<template>
  <div class="stage">
    <div class="center-wrap">
      <div class="stage__list anchors">
        <div ref="stageParent" class="stage__list-wrap">
          <div ref="stageImg" class="stage__img-wrap img-wrap">
            <div>
              <vue-picture v-multi-ref:picture url="/img/stages/1.jpg" />
              <vue-picture v-multi-ref:picture url="/img/stages/2.jpg" />
              <vue-picture v-multi-ref:picture url="/img/stages/3.jpg" />
              <vue-picture v-multi-ref:picture url="/img/stages/4.jpg" />
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

  async mounted() {
    await this.initMouse()
  },

  beforeDestroy() {
    this.mp && this.mp.destroy()
  },

  methods: {
    async initMouse() {
      const { MousemoveParallax } = await import('~/scripts/MousemoveParallax')

      this.mp = new MousemoveParallax({
        img: this.$refs.stageImg,
        images: this.$refs.picture,
        parents: this.$refs.parent,
        target: this.$refs.stageParent,
      })
    },
  },
}
</script>