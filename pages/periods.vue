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
            <div class="periods__body-item" data-href="#periods__box-one">
              1989/2002
            </div>
            <div class="periods__body-item" data-href="#periods__box-two">
              2003/2007
            </div>
            <div class="periods__body-item" data-href="#periods__box-three">
              2008/2010
            </div>
            <div class="periods__body-item" data-href="#periods__box-four">
              2010/2020
            </div>
          </div>
          <div id="periods__box-one" class="periods__box">
            <div class="periods__box-top">
              <div class="periods__box-number">Оpus I</div>
              <div class="periods__box-year">1989/2002</div>
            </div>
            <div class="periods__box-wrap">
              <div class="periods__item">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 0)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img1.jpg" />
                    </div>
                  </div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 1)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img2.jpg" />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--hide periods__img-wrap--3
                    "
                  ></div>
                </div>
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--hide periods__img-wrap--3
                    "
                  ></div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 2)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img3.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img5.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 3)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img4.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img6.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--62">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 4)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img5.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img8.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--143 periods__img-wrap--3
                    "
                    @click="openSlider(0, 5)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img6.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img3.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--3"
                    @click="openSlider(0, 6)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img7.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--18">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--109"
                    @click="openSlider(0, 7)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img8.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img4.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="periods__box-two" class="periods__box">
            <div class="periods__box-top">
              <div class="periods__box-number">Opus II</div>
              <div class="periods__box-year">2003/2007</div>
            </div>
            <div class="periods__box-wrap">
              <div class="periods__item periods__item--27">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--18"
                    @click="openSlider(1, 0)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img9.jpg" />
                    </div>
                  </div>
                </div>
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--73"
                    @click="openSlider(1, 1)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img10.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img11.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--37">
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--129 periods__img-wrap--2
                    "
                    @click="openSlider(1, 2)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img11.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img10.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--129 periods__img-wrap--2
                    "
                    @click="openSlider(1, 3)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img12.jpg" />
                    </div>
                  </div>
                </div>
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--hide periods__img-wrap--2
                    "
                  ></div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--112 periods__img-wrap--2
                    "
                    @click="openSlider(1, 4)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img13.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img14.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--37">
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--91 periods__img-wrap--2
                    "
                    @click="openSlider(1, 5)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img14.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img13.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--91 periods__img-wrap--2
                    "
                    @click="openSlider(1, 6)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img15.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="periods__box-three" class="periods__box">
            <div class="periods__box-top">
              <div class="periods__box-number">Opus III</div>
              <div class="periods__box-year">2008/2010</div>
            </div>
            <div class="periods__box-wrap">
              <div class="periods__item periods__item--66">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--105"
                    @click="openSlider(2, 0)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img16.jpg" />
                    </div>
                  </div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--27"
                    @click="openSlider(2, 1)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img17.jpg" />
                    </div>
                  </div>
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--92"
                    @click="openSlider(2, 2)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img18.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--37">
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--123 periods__img-wrap--2
                    "
                    @click="openSlider(2, 3)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img19.jpg" />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--123 periods__img-wrap--2
                    "
                    @click="openSlider(2, 4)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img20.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--27">
                <div class="periods__item-row">
                  <div
                    class="periods__img-wrap img-wrap periods__img-wrap--115"
                    @click="openSlider(2, 5)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img21.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="periods__box-four" class="periods__box">
            <div class="periods__box-top">
              <div class="periods__box-number">Opus IV</div>
              <div class="periods__box-year">2010/2020</div>
            </div>
            <div class="periods__box-wrap">
              <div class="periods__item periods__item--104">
                <div class="periods__item-row">
                  <div class="periods__item-box">
                    <div
                      class="
                        periods__img-wrap
                        img-wrap
                        periods__img-wrap--2 periods__img-wrap--120
                      "
                      @click="openSlider(3, 0)"
                    >
                      <div>
                        <vue-picture url="/img/periods-img22.jpg" />
                      </div>
                    </div>
                    <div
                      class="
                        periods__img-wrap
                        periods__img-wrap--hide
                        periods__img-wrap--2
                      "
                    ></div>
                    <div
                      class="
                        periods__img-wrap
                        periods__img-wrap--hide
                        periods__img-wrap--2
                      "
                    ></div>
                    <div
                      class="
                        periods__img-wrap
                        img-wrap
                        periods__img-wrap--2 periods__img-wrap--120
                      "
                      @click="openSlider(3, 1)"
                    >
                      <div>
                        <vue-picture url="/img/periods-img23.jpg" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--27 periods__img-wrap--155
                    "
                    @click="openSlider(3, 2)"
                  >
                    <div>
                      <vue-picture
                        class="periods__img-wrap--desktop"
                        url="/img/periods-img24.jpg"
                      />
                      <vue-picture
                        class="periods__img-wrap--mobile"
                        url="/img/periods-img25.jpg"
                      />
                    </div>
                  </div>
                  <div class="periods__item-box">
                    <div
                      class="
                        periods__img-wrap
                        img-wrap
                        periods__img-wrap--2 periods__img-wrap--112
                      "
                      @click="openSlider(3, 3)"
                    >
                      <div>
                        <vue-picture
                          class="periods__img-wrap--desktop"
                          url="/img/periods-img25.jpg"
                        />
                        <vue-picture
                          class="periods__img-wrap--mobile"
                          url="/img/periods-img24.jpg"
                        />
                      </div>
                    </div>
                    <div
                      class="
                        periods__img-wrap
                        periods__img-wrap--hide
                        periods__img-wrap--2
                      "
                    ></div>
                    <div
                      class="
                        periods__img-wrap
                        periods__img-wrap--hide
                        periods__img-wrap--2
                      "
                    ></div>
                    <div
                      class="
                        periods__img-wrap
                        img-wrap
                        periods__img-wrap--2 periods__img-wrap--112
                      "
                      @click="openSlider(3, 4)"
                    >
                      <div>
                        <vue-picture url="/img/periods-img26.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="periods__item periods__item--37">
                <div class="periods__item-row">
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--145 periods__img-wrap--2
                    "
                    @click="openSlider(3, 5)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img27.jpg" />
                    </div>
                  </div>
                  <div
                    class="
                      periods__img-wrap
                      img-wrap
                      periods__img-wrap--145 periods__img-wrap--2
                    "
                    @click="openSlider(3, 6)"
                  >
                    <div>
                      <vue-picture url="/img/periods-img28.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import { keysGenerator } from '~/scripts/utils/keysGenerator'

export default {
  components: { vuePicture, PeriodsSlider },
  mixins: [anchorVue, transition],

  data() {
    return {
      sliders: [
        {
          isSliderOpen: false,
          startFrom: 0,
          period: '1989/2002',
          items: [
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img1.jpg',
              date: '01.93',
              size: '73х60 см  2004 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img2.jpg',
              date: '01.2001',
              size: '73х60 см  2001 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img3.jpg',
              date: '01.91',
              size: '73х60 см  2008 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img4.jpg',
              date: '03.93',
              size: '73х60 см  2004 г.',
              type: 'холст, масло',
            },
          ],
        },
        {
          isSliderOpen: false,
          startFrom: 0,
          period: '2003/2007',
          items: [
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img9.jpg',
              date: '01.93',
              size: '73х60 см  2004 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img10.jpg',
              date: '01.2001',
              size: '73х60 см  2001 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img11.jpg',
              date: '01.91',
              size: '73х60 см  2008 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img12.jpg',
              date: '03.93',
              size: '73х60 см  2004 г.',
              type: 'холст, масло',
            },
            {
              _uid: keysGenerator(8),
              img: '/img/periods-img13.jpg',
              date: '05.93',
              size: '73х60 см  2004 г.',
              type: 'холст, масло',
            },
          ],
        },
      ],
    }
  },
  methods: {
    openSlider(slider = 0, idx = 0) {
      this.sliders[slider].startFrom = idx
      this.sliders[slider].isSliderOpen = true
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