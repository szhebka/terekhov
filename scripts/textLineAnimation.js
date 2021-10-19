import SplitType from 'split-type'
import gsap from 'gsap'

export const textLineAnimation = $el => {
  let $toAnimate

  const prepare = $el => {
    if ($el.classList.contains('splitted')) {
      return
    }
    const text = new SplitType($el, {
      types: 'words, lines',
      tagName: 'span',
      lineClass: 'e-line',
    })

    text.lines.forEach(line => {
      line.innerHTML = `<span class="line-inner">${line.innerHTML}</span>`
      line.setAttribute('data-line', line.innerText)
    })

    $toAnimate = [...$el.querySelectorAll('.line-inner')]
    $el.style.opacity = 1
    $el.classList.add('splitted')
  }

  return {
    in: ($el, duration = 3, stagger = 0.3) => {
      prepare($el)
      $el.style.opacity = 1

      gsap.to($toAnimate, {
        duration,
        y: '0%',
        stagger,
        opacity: 1,
        ease: 'expo.out',
        overwrite: true,
      })
    },
  }
}
