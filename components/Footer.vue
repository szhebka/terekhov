<template>
  <footer class="footer">
    <div class="center-wrap">
      <div class="footer__wrap">
        <nuxt-link class="footer__home" :to="localePath('index')"
          >домой</nuxt-link
        ><a class="footer__email" href="mailto:artiter@gmail.com"
          >artiter@gmail.com</a
        >
        <p class="footer__copyr">© 2021 все права защищены</p>
      </div>
    </div>
  </footer>
</template>