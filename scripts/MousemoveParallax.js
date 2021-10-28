import { lerp, matrixTransform, raf } from '@emotionagency/utils'
import gsap from 'gsap'

export class MousemoveParallax {
  mouse = {
    x: 0,
    y: 0,
    destX: 0,
    destY: 0,
  }

  ease = 0.015

  constructor(options) {
    this.img = options.img
    this.images = options.images
    this.parents = options.parents
    this.target = options.target

    this.bounds()
    this.init()
  }

  init() {
    this.target.addEventListener('mouseenter', this.mouseOn)
    this.target.addEventListener('mouseleave', this.mouseOut)

    this.parents.forEach(el => {
      el.$el.addEventListener('mouseenter', this.parentMouseOn)
    })

    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      destX: window.innerWidth / 2,
      destY: window.innerHeight / 2,
    }

    raf.on(this.animate)
  }

  bounds() {
    const methods = [
      'parentMouseOn',
      'mouseOn',
      'mouseOut',
      'moveMouse',
      'animate',
    ]

    methods.forEach(m => {
      this[m] = this[m].bind(this)
    })
  }

  get imgBounds() {
    return this.img.getBoundingClientRect()
  }

  parentMouseOn(e) {
    const el = e.currentTarget
    const idx = Number(el.dataset.parentIdx)

    this.images.forEach(el => {
      el.$el.style.opacity = 0
    })

    this.images[idx].$el.style.opacity = 1
  }

  moveMouse(e) {
    const offsetX = e.pageX
    const offsetY = e.pageY
    this.mouse.destX = offsetX - this.imgBounds.width / 2
    this.mouse.destY = offsetY - this.imgBounds.height / 2
  }

  mouseOn() {
    gsap.to(this.img, { duration: 1, autoAlpha: 1 })
    this.target.addEventListener('mousemove', this.moveMouse)
  }

  mouseOut() {
    gsap.to(this.img, {
      duration: 1,
      autoAlpha: 0,
    })

    this.target.removeEventListener('mousemove', this.moveMouse)

    // this.images.forEach(el => {
    //   el.$el.style.opacity = 0
    // })
  }

  animate() {
    this.mouse.x = lerp(this.mouse.x, this.mouse.destX, this.ease)
    this.mouse.y = lerp(this.mouse.y, this.mouse.destY, this.ease)

    this.img.style.transform = matrixTransform({
      move: {
        x: this.mouse.x,
        y: this.mouse.y,
      },
    })
  }

  destroy() {
    raf.off(this.animate)

    this.target.removeEventListener('mousemove', this.moveMouse)

    this.target.removeEventListener('mouseenter', this.mouseOn)
    this.target.removeEventListener('mouseleave', this.mouseOut)
    this.parents.forEach(el => {
      el.$el.removeEventListener('mouseenter', this.parentMouseOn)
    })
  }
}
