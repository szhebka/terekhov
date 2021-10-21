import { raf } from '@emotionagency/utils'
import gsap from 'gsap'
import { animations } from '../animations'
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
    animations(elem)
  }

  destroy() {
    raf.off(this.scrollInView)
  }
}

export default ScrollAnimations
