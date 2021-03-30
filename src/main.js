import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  if (process.env.NODE_ENV !== 'production') {
    // Show any error but this one
    if (err.message !== "Cannot read property 'badInput' of undefined") {
      console.error(err);
    }
  }
};

Vue.use(VueMaterial)

window.axios = axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
