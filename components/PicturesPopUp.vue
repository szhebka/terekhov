<template>
  <div ref="ppu" class="ppu" @click="close">
    <div class="ppu__backdrop"></div>
    <div ref="images" class="ppu__images">
      <div v-for="(image, idx) in images" :key="idx" class="ppu__image-wrapper">
        <vue-picture :url="image" class="ppu__image" />
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
      images: [
        '/img/philosophy-img.jpg',
        '/img/poet-img1.jpg',
        '/img/poet-img2.jpg',
        '/img/meaning-img1.jpg',
        '/img/meaning-img2.jpg',
        '/img/meaning-img3.jpg',
        '/img/buber-img1.jpg',
        '/img/buber-img2.jpg',
      ],
    }
  },

  methods: {
    open(idx) {
      // console.log(idx)
      window.ss && (window.ss.isFixed = true)
      const imagesWrapper = this.$refs.images
      const images = imagesWrapper.querySelectorAll('.ppu__image-wrapper')
      const tl = gsap.timeline()

      images.forEach(el => {
        el.style.opacity = 0
      })
      const currentImage = images[Number(idx)]

      currentImage.style.opacity = 1

      tl.to(this.$refs.ppu, {
        duration: 1,
        opacity: 1,
        visibility: 'visible',
      })

      tl.to(
        imagesWrapper,
        {
          duration: 1.5,
          y: 0,
          ease: 'power2.inOut',
        },
        0.4
      )

      tl.to(currentImage, { duration: 1.5, y: 0, ease: 'power2.inOut' }, 0.4)
    },
    close() {
      window.ss && (window.ss.isFixed = false)
      const imagesWrapper = this.$refs.images

      const images = imagesWrapper.querySelectorAll('.ppu__image-wrapper')

      gsap.to(this.$refs.ppu, {
        duration: 1.5,
        opacity: 0,
        delay: 0.3,
        visibility: 'hidden',
      })
      gsap.to(images, {
        duration: 1.5,
        y: '-100%',
        ease: 'power2.inOut',
      })

      gsap.to(imagesWrapper, { duration: 1.5, y: '100%', ease: 'power2.inOut' })
    },
  },
}
</script>