<template>
  <main data-route data-periods>
    <section class="periods" data-preload>
      <div class="center-wrap">
        <div class="periods__header">
          <div data-a-o class="back">
            <nuxt-link class="back__link" :to="localePath('index')"
              >назад</nuxt-link
            >
          </div>
          <div class="periods__header-right">
            <div data-a-h class="periods__header-text">
              Некоторые работы основных творческих периодов
            </div>
            <div data-a-h class="periods__header-title">периоды</div>
          </div>
        </div>
        <div data-a-o class="periods__body anchors">
          <div class="periods__body-list">
            <div
              v-for="(period, idx) in periods"
              :key="period._uid"
              class="periods__body-item"
              :data-href="`period-${idx + 1}`"
            >
              {{ period.date }}
            </div>
          </div>
          <section
            v-for="(period, idx) in periods"
            :id="`period-${idx + 1}`"
            :key="period._uid"
            class="period"
            :class="[`period-${idx + 1}`]"
          >
            <div class="period-1__container">
              <div class="period__title">
                <p class="period__number">{{ period.opus }}</p>
                <p class="period__years">{{ period.date }}</p>
              </div>
              <ul class="period__images period-1__images">
                <li
                  v-for="(image, i) in period.period_pictures"
                  :key="image._uid"
                  class="period__img"
                  :class="[`period-${idx + 1}__img`]"
                  @click="openSlider(idx, i)"
                >
                  <span class="period__i-wrapper">
                    <vue-picture
                      :url="image.small_picture.filename"
                      class="period__i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
    <footer class="footer footer--bg">
      <div class="center-wrap">
        <div class="footer__wrap">
          <a class="footer__home" href="/">домой</a
          ><a class="footer__email" href="mailto:artiter@gmail.com"
            >artiter@gmail.com</a
          >
          <p class="footer__copyr">© 2021 все права защищены</p>
        </div>
      </div>
    </footer>
    <periods-slider
      v-for="slider in sliders"
      :key="slider.period"
      :items="slider.items"
      :period="slider.period"
      :is-open="slider.isSliderOpen"
      :start-from="slider.startFrom"
      @close="closeSlider"
    />
  </main>
</template>

<script>
import vuePicture from '~/components/ThePicture.vue'
import PeriodsSlider from '~/components/slider/SliderWindow.vue'
import anchorVue from '~/mixins/anchor-vue.vue'
import transition from '~/mixins/transition.vue'

import periodsVue from '~/mixins/stories/periods.vue'

export default {
  components: { vuePicture, PeriodsSlider },
  mixins: [anchorVue, transition, periodsVue],

  computed: {
    slidersPictures() {
      return this.periods.map(period => {
        return period.period_pictures.map(image => ({
          _uid: image._uid,
          img: image.big_picture.filename,
          date: image.date || '',
          size: image.size || '',
          type: image.type || '',
        }))
      })
    },
    sliders: {
      get() {
        return this.periods.map((period, idx) => {
          return {
            isSliderOpen: false,
            startFrom: 0,
            period: period.date,
            items: this.slidersPictures[idx],
          }
        })
      },
      set(value) {
        console.log(value)
        this.sliders = [...this.sliders, ...value]
      },
    },
  },

  methods: {
    openSlider(slider = 0, idx = 0) {
      // this.sliders[slider].startFrom = idx
      // this.sliders[slider].isSliderOpen = true
      this.sliders = this.sliders.map((slider, i) => {
        if (i === slider) {
          slider.isSliderOpen = true
          slider.startFrom = idx
        }
        return slider
      })
      window.ss && (window.ss.isFixed = true)
    },
    closeSlider() {
      this.sliders.forEach(slider => {
        slider.startFrom = 0
        slider.isSliderOpen = false
      })
      window.ss && (window.ss.isFixed = false)
    },
  },
}
</script>