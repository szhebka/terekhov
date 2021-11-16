<template>
  <div class="slider-window" :class="[isOpen && 'slider-window--open']">
    <div class="center-wrap">
      <button class="slider-window__close" @click="close">
        <vue-close-icon />
      </button>
      <div class="slider-window__slider">
        <vue-slider :items="items" :current="startFrom" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from './VueSlider.vue'
import VueCloseIcon from './VueCloseIcon.vue'
export default {
  components: { VueSlider, VueCloseIcon },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    startFrom: {
      type: Number,
      default: 0,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>