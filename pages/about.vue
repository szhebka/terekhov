<template>
  <main data-route data-about>
    <section class="about" data-preload>
      <div class="center-wrap">
        <div class="about__header">
          <div class="about__header-left">
            <div data-a-o class="back about__back">
              <nuxt-link class="back__link" :to="localePath('index')">
                {{ $i18n.locale === 'en' ? 'back' : 'назад' }}</nuxt-link
              >
            </div>
            <div class="about__email">
              <a data-a-h :href="`mailto:${email}`">{{ email }}</a>
            </div>
          </div>
          <div data-a-img class="about__header-right img-wrap">
            <div>
              <vue-picture :url="bioScreens.picture.filename" />
            </div>
          </div>
        </div>
        <div data-a-o class="about__wrap">
          <div class="about__wrap-left">
            <div class="about__box">
              <h2 class="about__box-title">{{ bioScreens.name_artist }}</h2>
              <div>
                <div
                  v-for="item in bioScreens.biography_items[0].items"
                  :key="item._uid"
                  class="about__box-row"
                >
                  <div
                    class="about__box-date"
                    v-html="replaceSpace(item.year)"
                  />

                  <div class="about__box-info">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about__wrap-right">
            <div class="about__box">
              <h2 class="about__box-title">
                {{ bioScreens.EXHIBITIONS }}
              </h2>
              <div>
                <div
                  v-for="item in bioScreens.exhibition[0].items"
                  :key="item._uid"
                  class="about__box-row"
                >
                  <div class="about__box-date">{{ item.year }}</div>
                  <div class="about__box-info">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
            <div class="about__box">
              <h2 class="about__box-title">
                {{ bioScreens.personal_exhibitions }}
              </h2>
              <div>
                <div
                  v-for="item in bioScreens.personal_exhibition[0].items"
                  :key="item._uid"
                  class="about__box-row"
                >
                  <div class="about__box-date">{{ item.year }}</div>
                  <div class="about__box-info">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about__text">
          <p>
            {{ bioScreens.text }}
          </p>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="center-wrap">
        <div class="contact__wrap">
          <div class="contact__wrap-right contact__wrap-right--mobile">
            <div class="contact__box">
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.techique }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.techique_description }}</p>
                </div>
              </div>
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.formats }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.formats_description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact__wrap-left">
            <h2 class="about__box-title">{{ footer.contacts }}</h2>
            <p>Е</p>
            <a class="contact__email" :href="`mailto:${email}`">{{ email }}</a>
          </div>
          <div class="contact__wrap-right">
            <div class="contact__box contact__box--desktop">
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.techique }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.techique_description }}</p>
                </div>
              </div>
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.formats }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.formats_description }}</p>
                </div>
              </div>
            </div>
            <div class="contact__box">
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.photo }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.photo_description }}</p>
                </div>
              </div>
              <div class="contact__box-row">
                <div class="contact__box-title">{{ footer.design }}</div>
                <div class="contact__box-info">
                  <p>{{ footer.design_description }}</p>
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
import aboutVue from '~/mixins/stories/about.vue'
import transition from '~/mixins/transition.vue'
import { getStory } from '~/scripts/utils/getStory'

export default {
  components: { vuePicture, TheFooter },
  mixins: [anchorVue, aboutVue, transition],

  data() {
    return {
      email: null,
    }
  },

  async fetch() {
    const contactsData = await getStory(
      this,
      '/global/contacts',
      this.$i18n.locale
    )
    this.email = contactsData.story.content.email
  },
}
</script>