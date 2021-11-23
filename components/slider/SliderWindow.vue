<template>
  <div class="slider-window" :class="[isOpen && 'slider-window--open']">
    <div class="center-wrap">
      <div class="slider-window__period">{{ period }}</div>
      <button class="back slider-window__close" @click="close">
        <span class="back__link"> назад </span>
      </button>
      <div class="slider-window__slider">
        <vue-slider :items="items" :current="startFrom" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from './VueSlider.vue'
export default {
  components: { VueSlider },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    period: {
      type: String,
      default: '',
    },
    startFrom: {
      type: Number,
      default: 0,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>