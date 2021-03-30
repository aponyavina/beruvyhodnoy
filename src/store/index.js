import Vue from 'vue'
import Vuex from 'vuex'

import selected from './selected'
import manufacturerDraft from './manufacturerDraft'
import manufacturerBottles from './manufacturerBottles'
import getData from './getData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { selected, manufacturerDraft, manufacturerBottles, getData }
})
