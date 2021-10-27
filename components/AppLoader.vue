<template>
  <div ref="loader" class="app-loader">
    <div ref="progress" class="app-loader__progress"></div>
    <div class="app-loader__images">
      <div
        v-for="image in images"
        :key="image"
        ref="pictureWrapper"
        class="app-loader__image-wrapper"
      >
        <div ref="picture" class="app-loader__image">
          <div ref="imageInner" class="app-loader__image-inner">
            <vue-picture :url="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from 'gsap'
import VuePicture from '~/components/ThePicture.vue'

export default {
  components: { VuePicture },
  data() {
    return {
      images: ['/img/stages/1.jpg', '/img/stages/2.jpg', '/img/stages/3.jpg'],
    }
  },
  mounted() {
    setTimeout(() => {
      this.animation()
    }, 1000)
  },
  methods: {
    animation() {
      const $images = this.$refs.picture
      const $imagesInner = this.$refs.imageInner
      const $wrappers = this.$refs.pictureWrapper
      const ease = 'power2.inOut'

      const tl = gsap.timeline({
        onComplete: () => {
          const tl2 = gsap.timeline({
            onComplete: () => {
              this.$store.commit('app/setLoaded', true)
            },
          })

          tl2.to($images, { duration: 1.5, y: '-101%', ease }, 0)
          tl2.to($wrappers, { duration: 1.5, y: '101%', ease }, 0)
          tl2.to(
            this.$refs.progress,
            { duration: 1.5, scaleX: 0, transformOrigin: '100%', ease },
            0
          )
          tl2.to(this.$refs.loader, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              this.$refs.loader.style.display = 'none'
            },
          })
        },
      })

      tl.to($images, { duration: 1.5, y: 0, ease, stagger: 1.3 }, 0)
      tl.to($imagesInner, { duration: 1.5, scale: 1, ease, stagger: 1.3 }, 0)
      tl.to($wrappers, { duration: 1.5, y: 0, ease, stagger: 1.3 }, 0)
      tl.to(
        this.$refs.progress,
        { duration: 4.5, scaleX: 1, ease, stagger: 1.3 },
        0
      )
    },
  },
}
</script>