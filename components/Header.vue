<template>
  <header class="header">
    <div class="center-wrap">
      <div class="header__wrap">
        <div class="header__language">
          <a
            class="header__language-link header__language-link--active"
            href="/"
            >ru</a
          ><a class="header__language-link" href="/">en</a>
        </div>
        <nuxt-link class="header__logo" to="/"> Igor Terekhov </nuxt-link>
        <div class="header__burger" @click="openMenu">меню</div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="/about">
                биография
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="/">
                экспозиция
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="/periods">
                периоды
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="/texts">
                тексты
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <mobile-menu :is-open="isOpen" @closeMenu="closeMenu" />
  </header>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
export default {
  components: { MobileMenu },
  data() {
    return {
      isOpen: false,
    }
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