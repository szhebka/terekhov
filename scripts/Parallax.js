import { raf, resize, matrixTransform } from '@emotionagency/utils'

export class Parallax {
  constructor() {
    this.update()
    this.init()
  }

  init() {
    this.bounds()
    resize.on(this.resize)
  }

  bounds() {
    ;['animate', 'resize'].forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  update() {
    this.$els = document.querySelectorAll('[data-parallax]')
    this.$sections = document.querySelectorAll('[data-section-parallax]')
    this.$imgs = document.querySelectorAll('[data-img-parallax]')
    this.sizes = []
    this.getSize(this.$els, this.sizes)
    this.imgSizes = []
    this.getSize(this.$imgs, this.imgSizes)
  }

  get scrolled() {
    return document.querySelector('#scroll-container').scrollTop
  }

  get scrollHeight() {
    return document.querySelector('#scroll-container').scrollHeight
  }

  move(el, distance, scale = 1) {
    const t = matrixTransform({ scale, move: { y: distance } })
    el.style.transform = t
    el.style.willChange = 'transform'
  }

  els() {
    this.$els.length &&
      this.$els.forEach(($el, i) => {
        const coef = +$el.dataset.parallax
        const start = -(this.sizes[i] - this.sizes[i] * (1 + coef))
        const end = this.scrolled * coef
        this.move($el, start - end)
      })
  }

  imgs() {
    this.$imgs.length &&
      this.$imgs.forEach(($el, i) => {
        const coef = +$el.dataset.imgParallax
        const start = this.imgSizes[i] - this.imgSizes[i] * (1 + coef)
        const end = this.scrolled * coef
        this.move($el, start + end, $el.dataset.scale)
      })
  }

  sections() {
    this.$sections.length &&
      this.$sections.forEach($el => {
        const coef = +$el.dataset.sectionParallax
        const target = this.scrolled * coef
        this.move($el, target)
      })
  }

  getSize($els, array) {
    $els.length &&
      $els.forEach($el => {
        const b = $el.getBoundingClientRect()
        const size = b.top - b.height / 2
        array.push(size)
      })
  }

  resize() {
    this.sizes = []
    this.getSize(this.$els, this.sizes)
    this.imgSizes = []
    this.getSize(this.$imgs, this.imgSizes)
    window.innerWidth > 960 ? raf.on(this.animate) : raf.off(this.animate)
  }

  animate() {
    this.els()
    this.imgs()
    this.sections()
  }

  destroy() {
    resize.off(this.resize)
    raf.off(this.animate)

    this.$sections.length &&
      this.$sections.forEach($el => {
        this.move($el, 0)
      })

    this.$imgs.length &&
      this.$imgs.forEach(($el, i) => {
        this.move($el, 0, 1)
      })

    this.$els.length &&
      this.$els.forEach(($el, i) => {
        this.move($el, 0)
      })
  }
}
