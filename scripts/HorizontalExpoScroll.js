import { clamp, matrixTransform, raf } from '@emotionagency/utils'

export class HorizontalExpoScroll {
  constructor($el, $container, $scroller) {
    this.$el = $el
    this.$container = $container
    this.$scroller = $scroller
    this.$parallaxEl = $el.querySelector('[data-expo-parallax]')

    this.$sc = document.querySelector('#scroll-container')

    this.animate = this.animate.bind(this)

    this.init()
  }

  init() {
    if (screen.width > 640) {
      raf.on(this.animate)
    } else {
      raf.off(this.animate)
    }
  }

  get scrollHeight() {
    return this.$el.scrollWidth - window.innerHeight
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

  animate() {
    this.setHeight()
    const t = matrixTransform({ move: { x: this.offset } })
    const t2 = matrixTransform({ move: { x: -this.offset * 0.25 } })

    this.$el.style.transform = t
    this.$el.style.willChange = 'transform'
    this.$parallaxEl.style.transform = t2
    this.$parallaxEl.style.willChange = 'transform'

    this.$container.style.setProperty('--velocity', this.velocity / 500 + 'deg')
  }

  destroy() {
    raf.off(this.animate)
  }
}
