import gsap from 'gsap'

export class ExpoImages {
  constructor($links, $images) {
    this.$links = $links
    this.$images = $images

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)

    this.init()
  }

  init() {
    this.$links.forEach(el => {
      el.$el.addEventListener('mouseenter', this.onMouseEnter)
      el.$el.addEventListener('mouseleave', this.onMouseLeave)
    })
  }

  onMouseEnter(e) {
    const el = e.currentTarget
    const idx = el.dataset.parentIdx
    const $imageWrapper = this.$images[idx]
    const $images = $imageWrapper.querySelectorAll('.stage__img-container')

    gsap.to($images, {
      duration: 1,
      scaleY: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.2,
    })
  }

  onMouseLeave() {
    this.$images.forEach(el => {
      const $images = el.querySelectorAll('.stage__img-container')

      gsap.to($images, {
        duration: 1,
        scaleY: 1.1,
        y: 60,
        opacity: 0,
        ease: 'power2.out',
      })
    })
  }

  destroy() {
    this.$links.forEach(el => {
      el.$el.removeEventListener('mouseenter', this.onMouseEnter)
      el.$el.removeEventListener('mouseleave', this.onMouseLeave)
    })
  }
}
