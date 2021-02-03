import Vue from 'vue'
import App from './App.vue'
import router from './router'

import bulma from 'bulma/css/bulma.css'


Vue.config.productionTip = false

Vue.use(bulma)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')