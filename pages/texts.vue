<template>
  <main data-route data-texts>
    <section class="texts" data-preload>
      <div class="center-wrap">
        <div data-a-img class="texts__img-wrap img-wrap">
          <div>
            <vue-picture :url="story.content.picture.filename" />
          </div>
        </div>
        <div class="texts__top">
          <div data-a-t class="back">
            <nuxt-link class="back__link" :to="localePath('index')">
              {{ story.content.back_text }}</nuxt-link
            >
          </div>
          <h2 data-a-h class="texts__top-title">{{ story.content.title }}</h2>
        </div>
        <div ref="textBody" data-a-o class="texts__body toogles toogles--fade">
          <div class="texts__body-left">
            <ul class="texts__body-list">
              <li
                data-type="all"
                class="texts__body-item toogles__item-title"
                @click="filterItems('all')"
              >
                <p class="texts__body-link">
                  {{ $i18n.locale === 'en' ? 'all' : 'все' }}
                </p>
              </li>
              <li
                data-type="criticism"
                class="texts__body-item toogles__item-title"
                @click="filterItems('criticism')"
              >
                <p class="texts__body-link">
                  {{ $i18n.locale === 'en' ? 'criticism' : 'критика' }}
                </p>
              </li>
              <li
                data-type="author"
                class="texts__body-item toogles__item-title"
                @click="filterItems('author')"
              >
                <p class="texts__body-link">
                  {{
                    $i18n.locale === 'en' ? "artist's text" : 'текст художника'
                  }}
                </p>
              </li>
            </ul>
          </div>
          <div class="texts__body-right">
            <div class="toogles__item toogles__item--active">
              <div class="toogles__item-content" style="display: block">
                <div>
                  <div
                    v-for="(item, idx) in filteredItems"
                    :key="item._id"
                    class="texts__box"
                    :data-type-text="item.text_type[0].type"
                  >
                    <div class="texts__box-inner">
                      <div class="texts__box-left">
                        <div class="texts__box-section">
                          {{ item.text_type[0].text }}
                        </div>
                        <div class="texts__box-info">
                          <div class="texts__box-name">
                            {{ item.author_name }}
                          </div>
                          <div
                            class="texts__box-position"
                            :class="[
                              texts.length === idx + 1 &&
                                'texts__box-position--mobile',
                            ]"
                          >
                            {{ item.author_position }}
                          </div>
                        </div>
                        <span class="texts__box-icon"></span>
                      </div>
                      <div class="texts__box-right">
                        <div class="texts__box-content">
                          <div
                            class="content content--color"
                            v-html="breakLine(item.main_text)"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <the-footer :bg="true" />
  </main>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import vuePicture from '~/components/ThePicture.vue'
import anchorVue from '~/mixins/anchor-vue.vue'
import textsVue from '~/mixins/stories/texts.vue'
import transition from '~/mixins/transition.vue'
export default {
  components: { vuePicture, TheFooter },
  mixins: [anchorVue, transition, textsVue],
  data() {
    return {
      filteredItems: [],
    }
  },

  computed: {},

  watch: {
    filteredItems() {
      this.$nextTick(() => {
        this.accordeon.update()
      })
    },
  },

  async mounted() {
    const { default: Accordeon } = await import('~/scripts/Accordeon')
    this.AccInst = Accordeon
    this.accordeon = new Accordeon('.texts__box', '.texts__box-right')

    this.filterItems('all', false)
  },

  beforeDestroy() {
    this.accordeon && this.accordeon.destroy()
  },

  methods: {
    filterItems(value, isResetScroll = true) {
      const $filterNodes = document.querySelectorAll('[data-type]')
      const $filterNodeActive = document.querySelector(`[data-type="${value}"]`)

      $filterNodes.forEach(node =>
        node.classList.remove('toogles__item-title--active')
      )
      $filterNodeActive.classList.add('toogles__item-title--active')

      if (value === 'all') {
        this.filteredItems = this.texts
        if (isResetScroll) {
          this.resetTextsScroll()
        }
        return
      }
      this.filteredItems = this.texts.filter(
        item => item.text_type[0].type === value
      )
      this.resetTextsScroll()
    },

    resetTextsScroll() {
      const elTop = window.innerHeight

      if (window.ss?.state) {
        window.ss.state.target = elTop
      }
    },
  },
}
</script>