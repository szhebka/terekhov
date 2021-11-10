import { clamp, matrixTransform, raf, resize } from '@emotionagency/utils'
import imagesLoaded from 'imagesloaded'

export class HorizontalExpoScroll {
  constructor($el, $container, $scroller) {
    this.$el = $el
    this.$container = $container
    this.$scroller = $scroller
    this.$parallaxEl = $el.querySelector('[data-expo-parallax]')

    this.$sc = document.querySelector('#scroll-container')

    this.animate = this.animate.bind(this)
    this.resize = this.resize.bind(this)

    this.init()
  }

  init() {
    imagesLoaded(this.$el, () => {
      resize.on(this.resize)
    })
  }

  resize() {
    if (screen.width > 640) {
      this.setHeight()
      raf.on(this.animate)
    } else {
      raf.off(this.animate)
    }
  }

  get scrollHeight() {
    return this.$el.scrollWidth - this.screenDif
  }

  get screenDif() {
    return window.innerWidth - window.innerHeight
  }

  get offset() {
    const top = this.$container.getBoundingClientRect().top
    return clamp(top, -this.scrollHeight + window.innerHeight, 0)
  }

  get scrollPos() {
    return this.$sc.scrollTop
  }

  get velocity() {
    const target = window.ss?.state?.target ?? 0
    return this.isScrolling ? this.scrollPos - target : 0
  }

  get isScrolling() {
    return window.ss?.state?.scrolling ?? false
  }

  setHeight() {
    this.$container.style.height = this.scrollHeight + 'px'
  }

  get inView() {
    return this.$container.getBoundingClientRect().top <= window.innerHeight
  }

  animate() {
    if (!this.inView) {
      return
    }

    this.setHeight()
    const t = matrixTransform({ move: { x: this.offset } })
    const t2 = matrixTransform({ move: { x: -this.offset * 0.25 } })

    this.$el.style.transform = t
    this.$el.style.willChange = 'transform'
    this.$parallaxEl.style.transform = t2
    this.$parallaxEl.style.willChange = 'transform'
  }

  destroy() {
    raf.off(this.animate)
    resize.off(this.resize)
  }
}
