import ImgixClient from '@imgix/js-core'

export const imgix = new ImgixClient({
  domain: process.env.IMGIX_DOMAIN || 'terekhov.imgix.net',
  secureURLToken: process.env.IMGIX_KEY,
})

export const imgixTransform = url => imgix.buildURL(url, {})
