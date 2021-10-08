<template>
  <main>
    <section ref="textParent" data-home class="main-screen">
      <div class="center-wrap">
        <div ref="textEl" class="main-screen__e-text">
          <h1 data-a-h class="main-screen__title">Igor Terekhov</h1>
          <h2 data-a-t class="main-screen__subtitle">живопись</h2>
        </div>
        <div ref="imageParent" class="main-screen__e-image-sticky">
          <div ref="imageEl" class="main-screen__img-wrap img-wrap">
            <div data-a-t>
              <vue-picture url="/img/main-screen-img.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div data-parallax-wrapper>
      <div v-multi-ref:parallax data-offset="0">
        <section data-in-view class="thesis">
          <div data-a-p class="center-wrap">
            <div class="thesis__top">
              <div data-a-o class="thesis__small-title small-title">тезис</div>
              <h2
                data-a-h
                class="thesis__simple-title simple-title simple-title--color"
              >
                Плоскость холста предупреждает — здесь вы встретитесь
                с&nbsp;заведомо иным.
              </h2>
            </div>
            <div class="thesis__body">
              <div class="thesis__wrap">
                <div class="thesis__left">
                  <span data-a-l class="line"></span>
                </div>
                <div class="thesis__right">
                  <div data-a-o class="thesis__content content">
                    <p>
                      Возможности этого пространства расширились, в сравнении с
                      «абстрактной живописью». Мы имеем дело с открытой формой и
                      она конденсируется из квантованного пространства.
                      Гераклитов огонь, вспыхивающий и меркнущий, голос света.
                    </p>
                    <p>
                      Замаскированный под «живопись», объект обретает бытие.
                      Вместо живописи действия – процесс становления, подъёма.
                    </p>
                  </div>
                </div>
              </div>
              <div data-a-t class="thesis__wrap">
                <div class="thesis__left">
                  <div class="thesis__img-wrap img-wrap">
                    <div>
                      <vue-picture url="/img/thesis-img.jpg" />
                    </div>
                  </div>
                </div>
                <div data-a-t class="thesis__right">
                  <span data-a-l class="line"></span>
                  <div class="img-descr">
                    <div class="img-descr__wrap">
                      <p>Воздух</p>
                      <p>180х170 см 2008 г.</p>
                      <p>холст, масло</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="philosophy">
      <div class="center-wrap">
        <div class="philosophy__wrap">
          <div class="philosophy__left">
            <h2 class="philosophy__title">Αλήθεια</h2>
            <div class="philosophy__author-name philosophy__author-name--sm">
              М. Хайдеггер «Гераклит», перевод A. II. Шурбелева.
            </div>
          </div>
          <div class="philosophy__right">
            <div class="philosophy__descr">
              άναχωρήσας δ' εις το ιερόν της 'Αρτέμιδος μετά των παίδων
              ήστραγάλιζε περιστάντων δ' αυτόν των Έφεσίων, ί, ω κάκιστοι,
              θαυμάζετε; είπεν 'ή ου κρεΐττον τούτο ποιεΐν ή μεθ' υμών
              πολιτεύεσθαι;
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
                  М. Хайдеггер «Гераклит», перевод A. II. Шурбелева.
                </div>
              </div>
              <div class="philosophy__content content content--color">
                <p>
                  «Он же вернулся в святилище Артемиды, чтобы поиграть с детьми
                  в кости; вокруг него собрались эфесяне, и он сказал им: «Чему
                  дивитесь, негодяи?
                </p>
                <p>
                  Не лучше ли делать это, чем вместе с вами хлопотать о πόλις?».
                </p>
              </div>
            </div>
            <div class="philosophy__img-wrap img-wrap">
              <div>
                <vue-picture url="/img/philosophy-img.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>01.13</p>
                <p>200х138 см 2013 г.</p>
                <p>холст, масло</p>
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
                <vue-picture url="/img/poet-img1.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>10.08</p>
                <p>180х170 см 2008 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
          <div class="poet__right">
            <div class="poet__photo">
              <div class="img-wrap img-wrap--contain">
                <div>
                  <vue-picture url="/img/poet-photo.jpg" />
                </div>
              </div>
            </div>
            <h2 class="poet__simple-title simple-title">Ли Бо</h2>
            <span class="poet__line line line--bg"></span>
            <div class="poet__descr">
              <div class="poet__descr-wrap">
                <p>
                  Желтая Река идет в Восточную Бездну, Белое солнце опускается в
                  западное море. Уходящий поток и струящийся свет Летят, мчатся,
                  никого не ждут.
                </p>
              </div>
            </div>
            <div class="img-wrap">
              <div>
                <vue-picture url="/img/poet-img2.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>01.93</p>
                <p>73х60 см 1993 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="meaning">
      <div class="center-wrap">
        <div class="meaning__container">
          <div class="meaning__top">
            <h2 class="meaning__simple-title simple-title">
              Смысл живописной деятельности и её содержание неразделимы и это её
              уникальное свойство
            </h2>
            <span class="meaning__line line line--bg"></span>
            <div class="meaning__wrap">
              <div class="meaning__small-title small-title small-title--color">
                Мерло–Понти
              </div>
              <div class="meaning__content content content--color">
                <p>
                  Поэтому, вероятно, художники с такой неохотой рассказывают о
                  том, чем они занимаются. Перед ними есть пример создания
                  текстов, призванных объяснить то или иное, и непрестанно
                  возникающий при этом парадокс разрыва смысла и содержания в
                  сферах вербального.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="meaning__img-wrap img-wrap">
          <div>
            <vue-picture url="/img/meaning-img1.jpg" />
          </div>
        </div>
        <div class="meaning__box">
          <div class="meaning__box-left">
            <div class="meaning__img-wrap img-wrap">
              <div>
                <vue-picture url="/img/meaning-img2.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>Ворон</p>
                <p>60х50 см 1993 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
          <div class="meaning__box-right">
            <div class="meaning__img-wrap img-wrap">
              <div>
                <vue-picture url="/img/meaning-img3.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>10.04</p>
                <p>90х110 см 2004 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="buber">
      <div class="center-wrap">
        <div class="buber__top">
          <h2 class="buber__simple-title simple-title">Мартин Бубер</h2>
          <div class="buber__top-left">
            <span class="buber__line"></span>
            <div class="buber__descr">
              Чистый жест, который не похищает мир для себя, но выражает себя
              для мира – какое совершенное определение для последней фазы
              современного искусства.
            </div>
          </div>
        </div>
        <div class="buber__wrap">
          <div class="buber__wrap-img">
            <div class="img-wrap">
              <div>
                <vue-picture url="/img/buber-img1.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap">
                <p>05.04</p>
                <p>91х100 см 2004 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
          <div class="buber__wrap-img">
            <div class="img-wrap">
              <div>
                <vue-picture url="/img/buber-img2.jpg" />
              </div>
            </div>
            <div class="img-descr img-descr--color">
              <div class="img-descr__wrap img-descr__wrap--right">
                <p>06.08</p>
                <p>60х80 см 2008 г.</p>
                <p>холст, масло</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="exposition">
      <div class="center-wrap"></div>
      <div class="exposition__wrap">
        <div class="exposition__left">
          <h2 class="exposition__simple-title simple-title simple-title--color">
            Экспозиция
          </h2>
          <div class="exposition__box">
            <div class="exposition__box-left">
              <span class="line exposition__line"></span>
              <div class="small-title">тезис</div>
            </div>
            <div class="exposition__box-right">
              <div class="content content">
                <p>
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
        <div class="exposition__img-wrap img-wrap">
          <div>
            <vue-picture url="/img/exposition-img.jpg" />
          </div>
        </div>
        <div class="exposition__images">
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
        <!-- <div class="exposition-slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="novelty-slider__img">
                  <div>
                    <figure
                      class="slide-bgimg"
                      style="
                        background-image: url('~/assets/img/exposition-slider-img1.jpg');
                      "
                    >
                      <img
                        class="entity-img"
                        src="~/assets/img/exposition-slider-img1.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="novelty-slider__img">
                  <div>
                    <figure
                      class="slide-bgimg"
                      style="
                        background-image: url('~/assets/img/exposition-slider-img2.jpg');
                      "
                    ></figure>
                    <img
                      class="entity-img"
                      src="~/assets/img/exposition-slider-img2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <div class="stage">
      <div class="center-wrap">
        <div class="stage__list anchors">
          <div class="stage__list-wrap">
            <a class="stage__list-row" href="/periods">
              <div class="stage__list-info">
                <div class="stage__list-number">№01</div>
                <div class="stage__list-date">1989/2002</div>
              </div>
              <div class="stage__img-wrap img-wrap">
                <div>
                  <vue-picture url="/img/stage-img.jpg" />
                </div>
              </div> </a
            ><a class="stage__list-row" href="/periods">
              <div class="stage__list-info">
                <div class="stage__list-number">№02</div>
                <div class="stage__list-date">2003/2007</div>
              </div>
              <div class="stage__img-wrap img-wrap">
                <div><vue-picture url="/img/stage-img.jpg" /></div>
              </div> </a
            ><a class="stage__list-row" href="/periods">
              <div class="stage__list-info">
                <div class="stage__list-number">№03</div>
                <div class="stage__list-date">2008/2010</div>
              </div>
              <div class="stage__img-wrap img-wrap">
                <div>
                  <vue-picture url="/img/stage-img.jpg" />
                </div>
              </div> </a
            ><a class="stage__list-row" href="/periods">
              <div class="stage__list-info">
                <div class="stage__list-number">№04</div>
                <div class="stage__list-date">2010/2021</div>
              </div>
              <div class="stage__img-wrap img-wrap">
                <div>
                  <vue-picture url="/img/stage-img.jpg" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="biography">
      <div class="center-wrap">
        <h2 class="biography__title">
          Работы находятся в собрании Государственного Русского музея в
          Санкт-Петербурге, частных коллекциях России, Европы, Канады,
          Сингапура, Японии.
        </h2>
        <div class="biography__img-wrap img-wrap img-wrap--contain">
          <div>
            <vue-picture url="/img/biography-img.jpg" />
          </div>
        </div>
        <nuxt-link class="biography__link" to="/about"> биография </nuxt-link>
      </div>
    </section>
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
  </main>
</template>

<script>
import VuePicture from '~/components/vue-picture.vue'

export default {
  components: { VuePicture },

  async mounted() {
    const { default: ScrollAnimations } = await import(
      '~/scripts/scroll/ScrollAnimations'
    )
    const { ImageScrolling } = await import('~/scripts/OnScroll/ImageScrolling')
    this.sIS = new ImageScrolling(this.$refs.imageEl, this.$refs.imageParent)

    const { TextScrolling } = await import('~/scripts/OnScroll/TextScrolling')
    this.sIS = new TextScrolling(this.$refs.textEl, this.$refs.textParent)
    this.sectionParallaxInit()

    new ScrollAnimations()

    const { homeAnimation } = await import('~/scripts/homeAnimation')

    homeAnimation()
  },

  methods: {
    async sectionParallaxInit() {
      const { SectionParallax } = await import('~/scripts/SectionParallax')
      this.sp = new SectionParallax(this.$refs.parallax)
      this.sp.init()
    },
  },
}
</script>