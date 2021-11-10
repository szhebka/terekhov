import gsap from 'gsap'
import { textAnimation } from '../textAnimation'

export const secondScreenAnimation = () => {
  const $el = document.querySelector('.thesis')
  const $h = $el.querySelector('[data-a-thesis]')

  NodeList.prototype.animation = function (options) {
    this.length > 0 && gsap.to(this, options)
  }

  $el.querySelectorAll('[data-a-l]').animation({
    duration: 1,
    width: '100%',
    ease: 'power1.out',
    stagger: 0.2,
  })

  textAnimation().in($h, 3)

  $el.querySelectorAll('[data-a-t]').animation({
    duration: 1,
    delay: 0.5,
    opacity: 1,
    y: 0,
    ease: 'power1.out',
    stagger: 0.4,
  })

  $el.querySelectorAll('[data-a-o]').animation({
    duration: 1,
    delay: 0.3,
    opacity: 1,
    ease: 'power1.out',
    stagger: 0.2,
  })
}
