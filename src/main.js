import Vue from 'vue'
import App from './App.vue'
import store from './store'

// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'



Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')



/**
 * 导航栏分   <768px   >768px
 * 
 * 
 * 
 * 
 * 
 */