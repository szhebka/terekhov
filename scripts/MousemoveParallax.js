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
    this.img = options.img || console.error("There isn't img")
    this.target = options.target || console.error("There isn't target")
    this.effect = options.effect || 50

    this.bounds()
    this.init()
  }

  init() {
    this.target.addEventListener('mouseenter', this.mouseOn)
    this.target.addEventListener('mouseleave', this.mouseOut)
    // this.target.addEventListener('mousemove', this.moveMouse)

    raf.on(this.animate)
  }

  bounds() {
    const methods = ['mouseOn', 'mouseOut', 'moveMouse', 'animate']

    methods.forEach(m => {
      this[m] = this[m].bind(this)
    })
  }

  get imgBounds() {
    return this.img.getBoundingClientRect()
  }

  moveMouse(e) {
    const offsetX = e.pageX - this.imgBounds.left
    const offsetY = e.pageY - this.imgBounds.top
    this.mouse.destX = offsetX - this.imgBounds.width / 2
    this.mouse.destY = offsetY - this.imgBounds.height / 2
  }

  mouseOn() {
    gsap.to(this.img, { duration: 0.3, autoAlpha: 1 })
    this.target.addEventListener('mousemove', this.moveMouse)
  }

  mouseOut() {
    gsap.to(this.img, {
      duration: 0.3,
      autoAlpha: 0,
    })
    this.mouse.x = 0
    this.mouse.y = 0
    this.mouse.destX = 0
    this.mouse.destY = 0
    this.target.removeEventListener('mousemove', this.moveMouse)
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
}
