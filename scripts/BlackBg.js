import { raf } from '@emotionagency/utils'

export class BlackBg {
  inViewEls = []
  constructor() {
    this.$els = document.querySelectorAll('[data-dark]')
    this.animate = this.animate.bind(this)
    this.init()
  }

  init() {
    raf.on(this.animate)
  }

  update() {
    this.$els = document.querySelectorAll('[data-dark]')
  }

  isInView(item) {
    const topCoef = item.dataset.darkOffsetTop ?? 0.9
    const bottomCoef = item.dataset.darkOffsetBottom ?? 0.7

    const sizes = item.getBoundingClientRect()
    const start = sizes.top <= window.innerHeight * topCoef
    const end = -sizes.top <= sizes.height * bottomCoef

    return start && end
  }

  animate() {
    if (!this.$els.length) {
      return
    }

    this.$els.forEach(el => {
      if (this.isInView(el)) {
        if (!this.inViewEls.find(elem => el)) {
          this.inViewEls.push(el)
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.inViewEls.find(elem => el)) {
          this.inViewEls = this.inViewEls.filter(elem => elem !== el)
        }
      }

      if (this.inViewEls.length) {
        document.body.classList.add('e-black')
      } else {
        document.body.classList.remove('e-black')
      }
    })
  }

  destroy() {
    raf.off(this.animate)
  }
}
