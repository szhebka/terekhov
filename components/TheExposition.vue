<template>
  <section id="expo" ref="container" class="expo-scroll">
    <div data-dark class="expo-dark"></div>
    <div data-in-view class="exposition">
      <div ref="scroller" class="exposition__container">
        <div ref="el" class="exposition__wrap">
          <div data-expo-parallax class="exposition__left">
            <h2
              data-a-h
              class="exposition__simple-title simple-title simple-title--color"
            >
              {{ expo.title }}
            </h2>
            <div class="exposition__box">
              <div class="exposition__box-left">
                <span data-a-l class="line exposition__line"></span>
                <div data-a-o class="small-title">{{ expo.thesis }}</div>
              </div>
              <div class="exposition__box-right">
                <div class="content content">
                  <p data-a-p>
                    {{ expo.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-a-o class="exposition__img-wrap img-wrap">
            <vue-picture
              v-for="(image, idx) in expo.images"
              :key="image._uid"
              class="exposition__image"
              :class="[`exposition__image--${idx + 1}`]"
              :url="image.image.filename"
            />
          </div>
          <div data-a-o class="exposition__images">
            <div class="exposition__images-wrap">
              <div
                v-for="image in expo.images"
                :key="image._uid"
                class="exposition__images-item"
              >
                <div class="exposition__images-img img-wrap">
                  <div>
                    <vue-picture :url="image.image.filename" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VuePicture from '~/components/ThePicture.vue'

export default {
  components: { VuePicture },
  props: {
    expo: {
      type: Object,
      default: () => {},
    },
  },

  async mounted() {
    const { HorizontalExpoScroll } = await import(
      '~/scripts/HorizontalExpoScroll'
    )

    new HorizontalExpoScroll(
      this.$refs.el,
      this.$refs.container,
      this.$refs.scroller
    )
  },
}
</script>