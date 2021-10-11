import { raf, resize } from '@emotionagency/utils'

export class SectionParallax {
  isRendering = false

  constructor($els) {
    this.$els = [...$els]
    this.$sc = document.querySelector('#scroll-container')
  }

  init() {
    this.compute = this.compute.bind(this)
    this.resize = this.resize.bind(this)

    raf.on(this.compute)
  }

  resize() {
    window.innerWidth > 1060 ? raf.on(this.compute) : raf.off(this.compute)
  }

  get $wrapper() {
    return this.$els.map($el => {
      return $el.closest('[data-parallax-wrapper]')
    })
  }

  get $prevSection() {
    return this.$wrapper.map($el => {
      return $el.previousSibling.previousSibling
    })
  }

  compute() {
    this.$els.forEach(($el, i) => {
      const b = this.$prevSection[i].getBoundingClientRect()
      // const offset = $el.dataset.offset * b.height * (b.bottom * 0.004)
      const offset = $el.dataset.offset * b.height

      this.$wrapper[i].style.height = $el.offsetHeight + 'px'
      const percent = 1 - b.bottom / this.$sc.scrollTop

      if (b.bottom > offset && b.top < 0) {
        $el.style.position = 'fixed'
        $el.style.top = offset + 'px'
        $el.style.zIndex = '1'
        $el.style.width = '100%'
        $el.style.opacity = percent * 1.4
      } else {
        $el.style.position = 'relative'
        $el.style.top = '0px'
        $el.style.opacity = 1
      }
    })
  }

  destroy() {
    raf.off(this.compute)
    resize.off(this.resize)
  }
}
