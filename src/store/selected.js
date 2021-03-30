export default {
  state: {
    selected: 'draft',
  },
  mutations: {
    setSelect(state, payload) {
      state.selected = payload
    }
  },
  actions: {
    setSelect({ commit }, payload) {
      commit('setSelect', payload)
    }
  },
  getters: {
    getSelected(state) {
      return state.selected
    }
  }
}
