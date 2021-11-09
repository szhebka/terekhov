import { resize } from '@emotionagency/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class ImageTransition {
  end = 0
  constructor($parent, $el, $text) {
    this.$parent = $parent
    this.$el = $el
    this.$text = $text
    this.resize = this.resize.bind(this)
    resize.on(this.resize)
    this.animation()
  }

  resize() {
    this.end = window.innerHeight * 1.5
  }

  animation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$parent,
        pin: false,
        start: 'top top',
        end: `+=${this.end}`,
        scroller: '#scroll-container',
        scrub: 0.1,
      },
    })
    tl.to(this.$el, {
      scale: 3,
    })
    tl.to(this.$el, { opacity: 0 }, 0.1)
    tl.to(this.$text, { y: '-100%' }, 0)
  }

  destroy() {
    resize.off(this.resize)
  }
}
