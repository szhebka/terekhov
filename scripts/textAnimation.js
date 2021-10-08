import SplitType from 'split-type'
import gsap from 'gsap'

export const textAnimation = $el => {
  let $toAnimate

  const prepare = $el => {
    if ($el.classList.contains('splitted')) {
      return
    }
    const text = new SplitType($el, { types: 'words, chars', tagName: 'span' })

    text.chars.forEach(char => {
      char.innerHTML = `<span class="char-inner">${char.innerHTML}</span>`
      char.setAttribute('data-char', char.innerText)
    })

    $toAnimate = [...$el.querySelectorAll('.char-inner')]
    $el.style.opacity = 1
    $el.classList.add('splitted')
  }

  return {
    in: ($el, duration = 1, stagger = 0.03) => {
      prepare($el)
      $el.style.opacity = 1

      gsap.to($toAnimate, {
        duration,
        y: '0%',
        opacity: 1,
        ease: 'expo.out',
        stagger,
        overwrite: true,
      })
    },
  }
}
