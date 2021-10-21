import gsap from 'gsap'
import { textAnimation } from './textAnimation'
import { textLineAnimation } from './textLineAnimation'
import { delayPromise } from './utils/delay'

const ease = 'expo.out'

export const animations = (elem, h1dur = 2.3) => {
  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  elem.querySelectorAll('[data-a-l]').animation({
    duration: 2,
    width: '100%',
    delay: 0.5,
    ease,
    stagger: 0.2,
  })

  const $h = elem.querySelector('[data-a-h]')
  const $h2 = elem.querySelectorAll('[data-a-h2]')

  $h2.length &&
    $h2.forEach(async (el, i) => {
      await delayPromise(i * 300)
      textLineAnimation().in(el, h1dur)
    })

  $h && textAnimation().in($h, 3)

  elem.querySelectorAll('[data-a-t]').animation({
    duration: 2,
    delay: 0.5,
    opacity: 1,
    y: 0,
    ease,
    stagger: 0.4,
  })

  elem.querySelectorAll('[data-a-o]').animation({
    duration: 2,
    delay: 0.5,
    opacity: 1,
    ease,
    stagger: 0.4,
  })
}
