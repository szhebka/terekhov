import { resize } from '@emotionagency/utils'

export default class Accordeon {
  constructor(elem, child) {
    this.elemSelector = elem
    this.elem = document.querySelectorAll(elem)
    this.child = child

    this.render = this.render.bind(this)

    this.elem.forEach(el => {
      el.addEventListener('click', this.render)
    })
  }

  update() {
    this.elem.forEach(el => {
      el.removeEventListener('click', this.render)
    })

    this.elem = document.querySelectorAll(this.elemSelector)

    this.elem.forEach(el => {
      el.addEventListener('click', this.render)
    })
  }

  render(e) {
    const elem = e.currentTarget

    if (elem.classList.contains('opened')) elem.classList.remove('opened')
    else {
      this.elem.forEach(el => el.classList.remove('opened'))

      this.resizeCb = () => {
        this.setSizes(elem)
      }

      resize.on(this.resizeCb)
      elem.classList.add('opened')
    }
  }

  setSizes(elem) {
    const h = elem.querySelector(this.child).scrollHeight * 0.01
    elem.style.setProperty('--h', `${h}px`)
  }

  destroy() {
    resize.off(this.resizeCb)

    this.elem.forEach(el => {
      el.removeEventListener('click', this.render)
    })
  }
}
