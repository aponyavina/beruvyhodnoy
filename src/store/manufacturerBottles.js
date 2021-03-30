export default {
  state: {
    manufacturerBottlesName: '',
  },
  mutations: {
    setManufacturerBottlesName(state, payload) {
      state.manufacturerBottlesName = payload
    }
  },
  actions: {
    setManufacturerBottlesName({ commit }, payload) {
      commit('setManufacturerBottles', payload)
    }
  },
  getters: {
    getManufacturerBottlesName(state) {
      return state.manufacturerBottlesName
    }
  }
}
