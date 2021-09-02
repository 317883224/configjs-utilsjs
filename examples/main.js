import Vue from 'vue'
import App from './App.vue'
import configjsutilsjs from '../packages/index.js';

Vue.use(configjsutilsjs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
