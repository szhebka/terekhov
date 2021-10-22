<script>
import gsap from 'gsap'
import { resetScroll } from '~/scripts/utils/resetScroll'
import { loadAnimation } from '~/scripts/loadAnimation'
import { delayPromise } from '~/scripts/utils/delay'

export default {
  transition() {
    window.scetch?.figures?.forEach(f => {
      window.scetch.removeFigure(f._id)
    })

    return {
      mode: 'out-in',
      enter(el, done) {
        resetScroll()
        gsap.fromTo(
          el,
          { opacity: 0 },
          { duration: 0.5, opacity: 1, onComplete: done }
        )

        loadAnimation()
      },
      leave(el, done) {
        window.ss && (window.ss.isFixed = true)
        gsap.to(el, { duration: 0.5, opacity: 0, onComplete: done })
      },
    }
  },
  async mounted() {
    await delayPromise(1000)
    loadAnimation()
  },
}
</script>