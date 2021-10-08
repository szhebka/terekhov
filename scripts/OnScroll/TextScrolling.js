import Scrolling from './Scrolling'

export class TextScrolling extends Scrolling {
  init() {
    super.init()
  }

  get scale() {
    const min = 100
    const max = 200
    return this.computeFromMinToMax(min, max)
  }

  get transformY() {
    const min = 0
    const max = 1500 * (window.innerWidth / 1920)
    return this.computeFromMinToMax(min, max)
  }

  get opacity() {
    const min = 0
    const max = 1
    return this.computeFromMaxToMin(min, max)
  }

  onScroll() {
    super.onScroll()
    this.$el.style.transform = `translateY(${this.transformY}px)`
    this.$el.style.opacity = this.opacity
  }
}
