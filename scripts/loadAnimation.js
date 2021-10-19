import gsap from 'gsap'
import { textLineAnimation } from './textLineAnimation'

const noop = () => {}

export const loadAnimation = cb => {
  const $sc = document.querySelector('#scroll-container')
  const $el = document.querySelector('[data-route]')

  const callback = cb || noop

  if (!$el) return
  const $h = $el.querySelectorAll('[data-a-h2]')

  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  callback()
  gsap.to($sc, { duration: 0.5, opacity: 1 })

  $el.querySelectorAll('[data-a-l]').animation({
    duration: 2,
    width: '100%',
    ease: 'power1.out',
    stagger: 0.2,
  })

  $h.length &&
    $h.forEach(el => {
      textLineAnimation().in(el)
    })

  $el.querySelectorAll('[data-a-t]').animation({
    duration: 2,
    delay: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power1.out',
    stagger: 0.2,
  })

  $el.querySelectorAll('[data-a-o]').animation({
    duration: 2,
    delay: 0.5,
    opacity: 1,
    ease: 'power1.out',
    stagger: 0.2,
  })
}
