import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import index from './components/index.vue'

Vue.use(axios)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '*', component: index},
    ],
    mode: 'history',
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
