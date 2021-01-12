import Vue from 'vue'
//@ts-ignore
import startpage from './components/startpage.vue'


window.onload = async function() {

}Vue.config.productionTip = false
new Vue({
  render: h => h(startpage),
}).$mount('#app')

}  
      