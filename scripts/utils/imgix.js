import ImgixClient from '@imgix/js-core'

export const imgix = new ImgixClient({
  domain: process.env.IMGIX_DOMAIN,
  secureURLToken: process.env.IMGIX_KEY,
})
