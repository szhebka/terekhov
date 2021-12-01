export const getStory = async (app, url, lang) => {
  const l = '?language=' + lang || ''
  return await app.$storyapi
    .get(`cdn/stories${url}${l}`, {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    })
    .then(res => {
      return res.data
    })
}
