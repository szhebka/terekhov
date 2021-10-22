import SplitType from 'split-type'
import gsap from 'gsap'

export const textLineAnimation = $el => {
  let $toAnimate
  let $toAnimate2

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
    $toAnimate2 = [...$el.querySelectorAll('.line-inner')]
    $el.style.opacity = 1
    $el.classList.add('splitted')
  }

  return {
    in: ($el, duration = 1.8, stagger = 0.2) => {
      prepare($el)
      $el.style.opacity = 1
      const tl = gsap.timeline()
      if ($toAnimate?.length) {
        $toAnimate2.forEach(el => {})
        tl.to(
          $toAnimate,
          {
            duration,
            y: '0%',
            rotation: 0,
            stagger,
            ease: 'expo.out',
          },
          0
        )
        tl.to(
          $toAnimate,
          {
            duration: duration * 1.5,
            opacity: 1,
            stagger,
            ease: 'power3.out',
          },
          0
        )
      }
    },
    in2: ($el, duration = 2, stagger = 0.2) => {
      prepare($el)
      $el.style.opacity = 1

      $toAnimate2?.length &&
        gsap.to($toAnimate2, {
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
