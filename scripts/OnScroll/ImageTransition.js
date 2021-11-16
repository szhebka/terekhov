import { resize } from '@emotionagency/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class ImageTransition {
  end = 0
  constructor($parent, $el, $text, opts = {}) {
    this.scale = opts.scale || 3
    this.opacity = opts.opacity ?? true
    this.y = opts.y ?? 0
    this.$parent = $parent
    this.$el = $el
    this.$text = $text
    this.resize = this.resize.bind(this)
    resize.on(this.resize)
    this.animation()
  }

  resize() {
    this.end =
      window.innerWidth > 960
        ? window.innerHeight * 1.6
        : window.innerHeight * 0.6
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
      scale: this.scale,
      y: this.y,
    })
    this.opacity && tl.to(this.$el, { opacity: 0 }, 0.1)
    this.$text && tl.to(this.$text, { y: '-100%' }, 0)
  }

  destroy() {
    resize.off(this.resize)
  }
}
