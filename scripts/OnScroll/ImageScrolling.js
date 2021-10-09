import { clamp } from '@emotionagency/utils'
import Scrolling from './Scrolling'
import { secondScreenAnimation } from './secondScreenAnimation'

export class ImageScrolling extends Scrolling {
  init() {
    super.init()
    this.isActivated = false
  }

  get scale() {
    const min = 0
    const max = 4
    const value = max * this.percentScrolled

    return clamp(value, min, max)
  }

  get transformY() {
    const min = 0
    const max = -500 * (window.innerWidth / 1920)
    return this.computeFromMinToMax(min, max)
  }

  get opacity() {
    const min = 0
    const max = 1
    return this.computeFromMaxToMin(min, max)
  }

  onScroll() {
    super.onScroll()
    this.$el.style.transform = `scale(${this.scale + 1})`

    if (this.percentScrolled === 1 && !this.isActivated) {
      secondScreenAnimation()
      this.isActivated = true
    }
    // this.$el.style.opacity = this.opacity
  }
}
