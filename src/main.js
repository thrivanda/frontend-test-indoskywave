import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')