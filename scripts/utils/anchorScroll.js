import gsap from 'gsap'

export const anchorHandler = (target, cb) => {
  const callback = cb || function () {}
  const startLocation = window.pageYOffset
  const endLocation = target.offsetTop

  const distance = endLocation - startLocation

  if (window.innerWidth >= 1024) {
    gsap.to(window.ss.state, {
      duration: 1,
      target: distance,
      onComplete: callback,
    })
  } else {
    const $sc = document.querySelector('#scroll-container')

    gsap.to($sc, {
      duration: 1,
      scrollTop: distance,
      onComplete: callback,
    })
  }
}
export const anchorScroll = selector => {
  const links = [...document.querySelectorAll(selector)]

  const clickHandler = (e, link) => {
    e.preventDefault()
    const href = link.getAttribute('data-href')
    const target = document.querySelector(href)

    if (!target) {
      console.warn('target is not defined')
      return
    }
    anchorHandler(target)
  }

  const handlers = []
  links.forEach(link => {
    const handler = e => clickHandler(e, link)
    handlers.push(handler)
    link.addEventListener('click', handler)
  })

  return {
    destroy: () => {
      links.forEach((link, i) => {
        link.removeEventListener('click', handlers[i])
      })
    },
  }
}
