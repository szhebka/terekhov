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
    duration: 2.5,
    width: '100%',
    delay: 0.5,
    ease,
    stagger: 0.2,
  })

  elem.querySelectorAll('[data-a-img]').animation({
    duration: 2,
    delay: 0.5,
    opacity: 1,
    ease,
    stagger: 0.4,
  })

  elem.querySelectorAll('[data-a-img] div').animation({
    duration: 2.5,
    delay: 0.5,
    scale: 1,
    ease,
    stagger: 0.4,
  })

  const $thesis = elem.querySelector('[data-a-thesis]')
  const $title = elem.querySelectorAll('[data-a-title]')
  const $h = elem.querySelectorAll('[data-a-h]')
  const $p = elem.querySelectorAll('[data-a-p]')

  $title.length &&
    $title.forEach(async (el, i) => {
      await delayPromise(i * 300)
      textLineAnimation().in(el)
    })

  $h.length &&
    $h.forEach(async (el, i) => {
      await delayPromise(i * 300)
      textLineAnimation().in3(el, h1dur)
    })

  $p.length &&
    $p.forEach(async (el, i) => {
      await delayPromise((i + 1) * 300)
      textLineAnimation().in2(el, h1dur)
    })

  $thesis && textAnimation().in($thesis, 3)

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
