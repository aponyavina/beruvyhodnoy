export default {
  state: {
    manufacturerDraftName: '',
  },
  mutations: {
    setManufacturerDraftName(state, payload) {
      state.manufacturerDraftName = payload
    }
  },
  actions: {
    setManufacturerDraftName({ commit }, payload) {
      commit('setManufacturerDraft', payload)
    }
  },
  getters: {
    getManufacturerDraftName(state) {
      return state.manufacturerDraftName
    }
  }
}
