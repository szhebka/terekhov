<template>
  <header class="header">
    <div class="center-wrap">
      <div class="header__wrap">
        <div class="header__language">
          <a
            class="header__language-link"
            :href="langLink"
            :class="[$i18n.locale === 'ru' && 'header__language-link--active']"
          >
            ru
          </a>

          <a
            class="header__language-link"
            :href="langLink"
            :class="[$i18n.locale === 'en' && 'header__language-link--active']"
          >
            en
          </a>
        </div>
        <nuxt-link class="header__logo" :to="localePath('index')">
          Igor Terekhov
        </nuxt-link>
        <div class="header__burger" @click="openMenu">
          {{ $i18n.locale === 'en' ? 'menu' : 'меню' }}
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li
              v-for="item in menuItems"
              :key="item._uid"
              class="header__nav-item"
            >
              <nuxt-link class="header__nav-link" :to="item.to">
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <mobile-menu
      :is-open="isOpen"
      :items="menuItems"
      :lang-link="langLink"
      @closeMenu="closeMenu"
    />
  </header>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
import { getStory } from '~/scripts/utils/getStory'
import { getLink } from '~/scripts/utils/getLink'

export default {
  components: { MobileMenu },
  data() {
    return {
      isOpen: false,
      story: {
        menu: null,
      },
    }
  },

  async fetch() {
    const menuData = await getStory(this, '/global/menu', this.$i18n.locale)
    this.story.menu = menuData.story
  },

  computed: {
    langLink() {
      const path =
        this.$i18n.locale === 'en'
          ? this.switchLocalePath('ru')
          : this.switchLocalePath('en')
      return path.slice(-1) === '/' ? path : path + '/'
    },

    menuItems() {
      const storyItems = this.story.menu.content.links

      return storyItems.map(el => ({
        _uid: el._uid,
        text: el.text,
        to: this.localePath(
          getLink(el.link)
            .replace(`//${this.$i18n.locale}/`, '')
            .replace('/', '')
            .replace('/', '')
        ),
      }))
    },
  },

  async mounted() {
    const { default: NavbarPos } = await import('~/scripts/utils/navbarPos')

    this.navbarPos = new NavbarPos()
    this.navbarPos.init()
  },

  methods: {
    closeMenu() {
      this.isOpen = false
    },
    openMenu() {
      this.isOpen = true
    },
  },
}
</script>