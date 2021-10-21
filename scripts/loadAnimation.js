import gsap from 'gsap'
import { animations } from './animations'

const noop = () => {}

export const loadAnimation = cb => {
  const $sc = document.querySelector('#scroll-container')
  const $el = document.querySelector('[data-route]')

  const callback = cb || noop

  if (!$el) return

  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  callback()
  $sc && gsap.to($sc, { duration: 0.5, opacity: 1 })

  animations($el, 3)
}
