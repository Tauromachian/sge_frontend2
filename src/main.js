import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { AgGridVue } from "ag-grid-vue";



Vue.config.productionTip = false
Vue.component('ag-grid-vue', AgGridVue)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
