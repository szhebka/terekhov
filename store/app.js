export const state = () => ({
  loading: false,
  loaded: false,
  formVisibility: false,
  isWebp: false,
})

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setLoaded(state, value) {
    state.loaded = value
  },
  setFormVisibility(state, value) {
    state.formVisibility = value
  },
  setIsWebp(state, value) {
    state.isWebp = value
  },
}
