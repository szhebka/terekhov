import { raf } from '@emotionagency/utils'
import gsap from 'gsap'
import { textLineAnimation } from '../textLineAnimation'
import ScrollInView from './ScrollInView.js'

class ScrollAnimations extends ScrollInView {
  constructor() {
    super()

    NodeList.prototype.animation = function (options) {
      this.length > 0 && gsap.to(this, options)
    }

    this.sections = document.querySelectorAll('[data-in-view]')
    this.scrollInView = () =>
      new ScrollInView(this.sections, this.sectionAnimation, 0.5)

    raf.on(this.scrollInView)
  }

  sectionAnimation(elem) {
    elem.querySelectorAll('[data-a-l]').animation({
      duration: 2.5,
      width: '100%',
      ease: 'power1.out',
      stagger: 0.2,
    })

    const $h = elem.querySelectorAll('[data-a-h2]')
    $h.length &&
      $h.forEach(el => {
        textLineAnimation().in(el)
      })

    elem.querySelectorAll('[data-a-t]').animation({
      duration: 2.5,
      delay: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      stagger: 0.2,
    })

    elem.querySelectorAll('[data-a-o]').animation({
      duration: 2.5,
      delay: 0.5,
      opacity: 1,
      ease: 'power1.out',
      stagger: 0.2,
    })
  }

  destroy() {
    raf.off(this.scrollInView)
  }
}

export default ScrollAnimations
