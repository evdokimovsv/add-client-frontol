import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'



locale.use(lang)
Vue.use(ElementUI)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
