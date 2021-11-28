<template>
  <main>
    <section
      ref="textParent"
      data-route
      data-home
      data-preload
      class="main-screen"
    >
      <div class="center-wrap">
        <div ref="textEl" class="main-screen__e-text">
          <h1 data-a-h class="main-screen__title">{{ home1.title }}</h1>
          <h2 data-a-t class="main-screen__subtitle">
            {{ home1.description }}
          </h2>
        </div>
        <div ref="imageParent" data-a-img-main class="main-screen__e-image">
          <div ref="imageEl" class="main-screen__img-wrap img-wrap">
            <div>
              <vue-picture :url="home1.picture.filename" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      ref="thesis"
      data-in-view
      data-dark
      data-dark-offset-top="1"
      data-dark-offset-bottom="0.7"
    >
      <div data-offset="0">
        <section class="thesis">
          <div class="center-wrap">
            <div class="thesis__top">
              <div data-a-o class="thesis__small-title small-title">
                {{ home2.small_text }}
              </div>
              <h2
                data-a-thesis
                class="thesis__simple-title simple-title simple-title--color"
              >
                {{ home2.title }}
              </h2>
            </div>
            <div class="thesis__body">
              <div class="thesis__wrap">
                <div class="thesis__left">
                  <span data-a-l class="line"></span>
                </div>
                <div class="thesis__right">
                  <div data-a-o class="thesis__content content">
                    <p v-html="breakLine(home2.text)"></p>
                  </div>
                </div>
              </div>
              <div class="thesis__wrap">
                <span data-a-l class="line mob-line"></span>
                <div data-a-t class="thesis__left">
                  <div class="thesis__img-wrap img-wrap">
                    <div>
                      <vue-gl-picture
                        :url="home2.picture.filename"
                        data-pp-idx="8"
                      />
                    </div>
                  </div>
                </div>
                <div class="thesis__right">
                  <span data-a-l class="line"></span>
                  <div data-a-t class="img-descr">
                    <div class="img-descr__wrap">
                      <p>{{ home2.picture_name }}</p>
                      <p>{{ home2.picture_size }}</p>
                      <p>{{ home2.picture_type }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section data-in-view class="philosophy">
      <div class="center-wrap">
        <div class="philosophy__wrap">
          <div class="philosophy__left">
            <h2 class="philosophy__title">{{ home3.name }}</h2>
            <div class="philosophy__author-name philosophy__author-name--sm">
              {{ home3.description }}
            </div>
          </div>
          <div class="philosophy__right">
            <div class="philosophy__descr">
              {{ home3.quote }}
            </div>
            <span class="line line--bg philosophy__line"></span>
          </div>
        </div>
        <div class="philosophy__bottom">
          <div class="philosophy__right">
            <div class="philosophy__right-wrap">
              <div class="philosophy__author">
                <div
                  class="philosophy__author-name philosophy__author-name--lm"
                >
                  {{ home3.description }}
                </div>
              </div>
              <div class="philosophy__content content content--color">
                <p v-html="breakLine(home3.quote_1)" />
              </div>
            </div>
            <div class="philosophy__img-wrap img-wrap">
              <div>
                <vue-gl-picture
                  :url="home3.big_picture.filename"
                  data-pp-idx="0"
                />
              </div>
            </div>
            <div data-a-t class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>{{ home3.picture_name }}</p>
                <p>{{ home3.picture_date }}</p>
                <p>{{ home3.picture_type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="poet">
      <div class="center-wrap">
        <div class="poet__wrap">
          <div class="poet__left">
            <div class="img-wrap">
              <div>
                <vue-gl-picture
                  :url="home4.big_picture.filename"
                  data-pp-idx="1"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>{{ home4.picture_name }}</p>
                <p>{{ home4.picture_date }}</p>
                <p>{{ home4.picture_type }}</p>
              </div>
            </div>
          </div>
          <div data-in-view class="poet__right">
            <div class="poet__photo">
              <div class="img-wrap img-wrap--contain">
                <div>
                  <vue-gl-picture :url="home4.small_picture.filename" />
                </div>
              </div>
            </div>
            <h2 data-a-h class="poet__simple-title simple-title">
              {{ home4.title }}
            </h2>
            <span data-a-l class="poet__line line line--bg"></span>
            <div class="poet__descr">
              <div class="poet__descr-wrap">
                <p data-a-p>
                  {{ home4.text }}
                </p>
              </div>
            </div>
            <div class="img-wrap">
              <div>
                <vue-gl-picture
                  :url="home4.big_picture_1.filename"
                  data-pp-idx="2"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>{{ home4.picture1_name }}</p>
                <p>{{ home4.picture1_date }}</p>
                <p>{{ home4.picture1_type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-in-view class="meaning">
      <div class="center-wrap">
        <div class="meaning__container">
          <div class="meaning__top">
            <h2 data-a-h class="meaning__simple-title simple-title">
              {{ home5.title }}
            </h2>
            <span data-a-l class="meaning__line line line--bg"></span>
            <div ref="meaningParent" class="meaning__wrap">
              <div
                data-a-p
                class="meaning__small-title small-title small-title--color"
              >
                {{ home5.name }}
              </div>
              <div class="meaning__content content content--color">
                <p data-a-p>
                  {{ home5.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="meaning__img-wrap img-wrap">
          <div ref="meaningImage">
            <vue-gl-picture :url="home5.picture_1.filename" />
          </div>
        </div>
        <div class="meaning__box">
          <div class="meaning__box-left">
            <div class="meaning__img-wrap img-wrap">
              <div>
                <vue-gl-picture
                  :url="home5.picture_2.filename"
                  data-pp-idx="4"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>{{ home5.picture2_name }}</p>
                <p>{{ home5.picture2_date }}</p>
                <p>{{ home5.picture2_type }}</p>
              </div>
            </div>
          </div>
          <div class="meaning__box-right">
            <div class="meaning__img-wrap img-wrap">
              <div>
                <vue-gl-picture
                  :url="home5.picture_3.filename"
                  data-pp-idx="5"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>{{ home5.picture3_name }}</p>
                <p>{{ home5.picture3_date }}</p>
                <p>{{ home5.picture3_type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-in-view class="buber">
      <div class="center-wrap">
        <div class="buber__top">
          <h2 data-a-h class="buber__simple-title simple-title">
            {{ home6.title }}
          </h2>
          <div class="buber__top-left">
            <span data-a-l class="buber__line"></span>
            <div data-a-p class="buber__descr">
              {{ home6.text }}
            </div>
          </div>
        </div>
        <div class="buber__wrap">
          <div class="buber__wrap-img">
            <div class="img-wrap">
              <div>
                <vue-gl-picture
                  :url="home6.picture_1.filename"
                  data-pp-idx="6"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>{{ home6.picture1_name }}</p>
                <p>{{ home6.picture1_date }}</p>
                <p>{{ home6.picture1_type }}</p>
              </div>
            </div>
          </div>
          <div class="buber__wrap-img">
            <div class="img-wrap">
              <div>
                <vue-gl-picture
                  :url="home6.picture_2.filename"
                  data-pp-idx="7"
                />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>{{ home6.picture2_name }}</p>
                <p>{{ home6.picture2_date }}</p>
                <p>{{ home6.picture2_type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <the-exposition :expo="expo" />
    <expo-stages />
    <div data-parallax-wrapper>
      <div v-multi-ref:parallax data-offset="0.1">
        <the-biography :bio="bio" />
        <footer class="footer">
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
      </div>
    </div>
    <!-- <pictures-pop-up ref="ppu" /> -->
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import AnchorLink from '~/components/AnchorLink.vue'
import VuePicture from '~/components/ThePicture.vue'
import VueGlPicture from '~/components/GlPicture.vue'
import TheExposition from '~/components/TheExposition.vue'
import ExpoStages from '~/components/ExpoStages.vue'
import AnchorVue from '~/mixins/anchor-vue.vue'
import transition from '~/mixins/transition.vue'
import TheBiography from '~/components/TheBiography.vue'
import homeStory from '~/mixins/stories/home.vue'

export default {
  components: {
    VuePicture,
    VueGlPicture,
    TheExposition,
    ExpoStages,
    TheBiography,
  },
  mixins: [AnchorVue, AnchorLink, transition, homeStory],

  async mounted() {
    const { initImages } = await import('~/scripts/GL/Images/init')
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }

    const { default: ScrollAnimations } = await import(
      '~/scripts/scroll/ScrollAnimations'
    )

    new ScrollAnimations()

    const { BlackBg } = await import('~/scripts/BlackBg')
    this.blackBg = new BlackBg()

    this.sectionParallaxInit()

    const { ImageTransition } = await import(
      '~/scripts/OnScroll/ImageTransition'
    )

    new ImageTransition(
      this.$refs.textParent,
      this.$refs.imageParent,
      this.$refs.textEl
    )

    if (window.innerWidth > 960) {
      this.$refs.thesis.setAttribute('data-dark-offset-top', '1.5')
    }

    if (window.innerWidth <= 960) {
      const expo = document.querySelector('#expo [data-dark]')
      expo.removeAttribute('data-dark')
      this.blackBg && this.blackBg.update()
    }

    console.log(this.story.content)
  },

  beforeDestroy() {
    this.blackBg && this.blackBg.destroy()
  },

  methods: {
    async sectionParallaxInit() {
      const { SectionParallax } = await import('~/scripts/SectionParallax')
      this.sp = new SectionParallax(this.$refs.parallax)
      this.sp.init()
    },
    openPPU(e) {
      const target = e.currentTarget
      const idx = target.dataset.ppIdx

      this.$refs.ppu.open(idx)
    },
  },
}
</script>