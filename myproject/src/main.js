import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入cray懒加载组件
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
    loading: 'dist/loading.gif', // 为图片加载前展示的默认图片路径
  })

//在new vue之前引入页头组件，并让它变成全局组件np
import Header from "./components/Header"
Vue.component("my-header", Header);

//在new vue之前引入页脚组件，并让它变成全局组件
import Footer from "./components/Footer"
Vue.component("my-footer", Footer);

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8111';
Vue.prototype.$axios = axios;

// 将vuex对象绑定到原型对象上方便调用
Vue.prototype.$store = store;

// 挂载element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')