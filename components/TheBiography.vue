<template>
  <section class="biography">
    <div class="center-wrap">
      <h2 class="biography__title">
        Работы находятся в собрании Государственного Русского музея в
        Санкт-Петербурге, частных коллекциях России, Европы, Канады, Сингапура,
        Японии.
      </h2>
      <div class="biography__img-wrap img-wrap img-wrap--contain">
        <div>
          <vue-picture
            url="/img/biography-img.jpg"
            :class="[isHovered && 'bio-img--active']"
          />
        </div>
      </div>
      <nuxt-link class="biography__link" :to="localePath('about')"
        >биография</nuxt-link
      >
    </div>
  </section>
</template>

<script>
import VuePicture from '~/components/ThePicture.vue'
export default {
  components: { VuePicture },
  data() {
    return {
      isHovered: false,
    }
  },

  methods: {
    onMouseEnter() {
      this.isHovered = true
    },
    onMouseLeave() {
      this.isHovered = false
    },
  },
}
</script>