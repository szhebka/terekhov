import gsap from 'gsap'
import ScrollInView from './ScrollInView.js'

class ScrollAnimations extends ScrollInView {
  constructor() {
    super()

    NodeList.prototype.animation = function (options) {
      this.length > 0 && gsap.to(this, options)
    }

    this.sections = document.querySelectorAll('[data-in-view]')

    // raf.on(new ScrollInView(this.sections, this.sectionAnimation, 0.5))
    new ScrollInView(this.sections, this.sectionAnimation, 0.5)
  }

  sectionAnimation(elem) {
    elem.querySelectorAll('[data-a-line]').animation({
      duration: 1,
      width: '100%',
      ease: 'power1.out',
      stagger: 0.2,
    })

    elem.querySelectorAll('[data-a-h]').animation({
      duration: 1,
      delay: 0.2,
      opacity: 1,
      y: 0,
      ease: 'power1.out',
    })

    elem.querySelectorAll('[data-a-p]').animation({
      duration: 1,
      delay: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      stagger: 0.2,
    })
  }
}

export default ScrollAnimations
