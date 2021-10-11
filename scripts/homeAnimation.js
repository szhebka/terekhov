import gsap from 'gsap'
import { textAnimation } from './textAnimation'
import { delayPromise } from './utils/delay'

export const homeAnimation = async () => {
  const $sc = document.querySelector('#scroll-container')
  const $el = document.querySelector('[data-home]')
  const $h = $el.querySelector('[data-a-h]')

  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  await delayPromise(1000)
  gsap.to($sc, { duration: 0.5, opacity: 1 })

  $el.querySelectorAll('[data-a-l]').animation({
    duration: 1,
    width: '100%',
    ease: 'power1.out',
    stagger: 0.2,
  })

  textAnimation().in($h, 2, 0)

  $el.querySelectorAll('[data-a-t]').animation({
    duration: 1,
    delay: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power1.out',
    stagger: 0.2,
  })

  $el.querySelectorAll('[data-a-o]').animation({
    duration: 1,
    delay: 0.3,
    opacity: 1,
    ease: 'power1.out',
    stagger: 0.2,
  })
}
