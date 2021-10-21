import gsap from 'gsap'
import { textAnimation } from './textAnimation'
import { textLineAnimation } from './textLineAnimation'

export const animations = (elem, h1dur = 2.3) => {
  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  elem.querySelectorAll('[data-a-l]').animation({
    duration: 1.5,
    width: '100%',
    ease: 'sine.out',
    stagger: 0.2,
  })

  const $h = elem.querySelector('[data-a-h]')
  const $h2 = elem.querySelectorAll('[data-a-h2]')

  $h2.length &&
    $h2.forEach(el => {
      textLineAnimation().in(el, h1dur)
    })

  $h && textAnimation().in($h, 3)

  elem.querySelectorAll('[data-a-t]').animation({
    duration: 1,
    delay: 0.5,
    opacity: 1,
    y: 0,
    ease: 'sine.out',
    stagger: 0.4,
  })

  elem.querySelectorAll('[data-a-o]').animation({
    duration: 1.5,
    delay: 0.5,
    opacity: 1,
    ease: 'sine.out',
    stagger: 0.4,
  })
}
