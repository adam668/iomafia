import Vue from 'vue'
//@ts-ignore
import startpage from './components/startpage.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vuetify from 'vuetify';

window.onload = async function() {
  const vuetifyOptions = { icons: { iconfont: 'mdi' }, theme: {dark: true} 
}
  

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  vuetify: new Vuetify(vuetifyOptions), 
  render: h => h(startpage)
}).$mount('#app')
 
}  
