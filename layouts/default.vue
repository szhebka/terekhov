<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Popup />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Popup from '@/components/Popup'
export default {
  components: {
    Header,
    Popup,
  },
}
</script>
