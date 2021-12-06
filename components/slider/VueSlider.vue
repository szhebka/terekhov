<template>
  <div class="slider">
    <ul class="slider__slides">
      <li
        v-for="(item, idx) in items"
        :key="item._uid"
        class="slider__slide slide"
        :class="[currentSlide === idx && 'slide--active']"
      >
        <the-picture :url="item.img" img-class="slide__img" width="1000" />
      </li>
    </ul>
    <nav class="slider__nav">
      <button class="slider__nav-item slider__nav-item--left" @click="prev">
        <vue-arrow-icon />
      </button>
      <button class="slider__nav-item slider__nav-item--right" @click="next">
        <vue-arrow-icon />
      </button>
    </nav>
    <ul class="slider__texts">
      <li
        v-for="(item, idx) in items"
        :key="item._uid"
        class="slider__text sl-text"
        :class="[currentSlide === idx && 'sl-text--active']"
      >
        <small class="sl-text__date">{{ item.name }}</small>
        <small class="sl-text__size">{{ item.size }}</small>
        <small class="sl-text__type">{{ item.type }}</small>
      </li>
    </ul>
    <div class="slider__counter">{{ currentSlide + 1 }}/{{ length }}</div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'
import VueArrowIcon from './VueArrowIcon.vue'
import swipedetect from '@/scripts/utils/swipe'

export default {
  components: { VueArrowIcon },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      currentSlide: this.current,
    }
  },

  computed: {
    length() {
      return this.items.length
    },
  },

  watch: {
    current() {
      this.currentSlide = this.current
    },
  },

  mounted() {
    window.addEventListener('keydown', this.sliderHandler)

    emitter.on('resetCurrent', () => {
      this.currentSlide = 0
    })

    this.sdDestroy = swipedetect(this.$el, swipedir => {
      swipedir === 'left' ? this.next() : this.prev()
    })
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.sliderHandler)

    this.sdDestroy && this.sdDestroy()
  },

  methods: {
    prev() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.items.length - 1
      }
    },
    next() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
    sliderHandler(e) {
      if (e.key === 'ArrowLeft') {
        this.prev()
      }

      if (e.key === 'ArrowRight') {
        this.next()
      }
    },
  },
}
</script>