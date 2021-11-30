<template>
  <footer class="footer" :class="[bg && 'footer--bg']">
    <div class="center-wrap">
      <div class="footer__wrap">
        <nuxt-link class="footer__home" :to="localePath('index')">{{
          footer.link_text
        }}</nuxt-link
        ><a class="footer__email" :href="`mailto:${email}`">{{ email }}</a>
        <p class="footer__copyr">{{ footer.copy_text }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { getStory } from '~/scripts/utils/getStory'
export default {
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      email: null,
      footer: {},
    }
  },
  async fetch() {
    const contactsData = await getStory(
      this,
      '/global/contacts',
      this.$i18n.locale
    )
    const footerData = await getStory(this, '/global/footer', this.$i18n.locale)
    this.email = contactsData.story.content.email
    this.footer = footerData.story.content
  },
}
</script>