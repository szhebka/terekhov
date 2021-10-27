import ScrollMagic from 'ScrollMagic'
import 'debug.addIndicators'
// import 'animation.gsap'

export const magicTest = () => {
  const controller = new ScrollMagic.Controller()

  // const tl = gsap.timeline()

  // tl.to('.main-screen__img-wrap', 1, { y: -250 })

  const scene = new ScrollMagic.Scene({
    duration: '1000', // resposive duration in %
    offset: 0, // offset trigger position by 100px
    triggerElement: '.main-screen__e-image-sticky', // what will trigger scene
    triggerHook: 0,
  })
  scene.addIndicators({ name: 'Blah blah' })
  // scene.setTween(tl)
  scene.setPin('.main-screen__img-wrap')
  scene.addTo(controller)
}
