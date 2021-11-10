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
              Экспозиция
            </h2>
            <div class="exposition__box">
              <div class="exposition__box-left">
                <span data-a-l class="line exposition__line"></span>
                <div data-a-o class="small-title">тезис</div>
              </div>
              <div class="exposition__box-right">
                <div class="content content">
                  <p data-a-p>
                    Живопись, утратив монополию на изобразительность, развила
                    способность создавать тотальные объекты с уникальными
                    свойствами. Пространство холста может расширяться быстрее
                    Вселенной. Задача не просто найти сингулярность в видимом, а
                    создать её.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-a-o class="exposition__img-wrap img-wrap">
            <vue-picture
              class="exposition__image exposition__image--1"
              url="/img/expo/1.jpg"
            />
            <vue-picture class="exposition__image" url="/img/expo/2.jpg" />
            <vue-picture
              class="exposition__image exposition__image--3"
              url="/img/expo/3.jpg"
            />
          </div>
          <div data-a-o class="exposition__images">
            <div class="exposition__images-wrap">
              <div class="exposition__images-item">
                <div class="exposition__images-img img-wrap">
                  <div>
                    <vue-picture url="/img/exposition-slider-img1.jpg" />
                  </div>
                </div>
              </div>
              <div class="exposition__images-item">
                <div class="exposition__images-img img-wrap">
                  <div>
                    <vue-picture url="/img/exposition-slider-img2.jpg" />
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