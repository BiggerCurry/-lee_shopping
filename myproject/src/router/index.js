import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

//商品页组件


import Commodity from '../views/Commodity'
import Clothing from '../views/Clothing'
import A00 from '../views/A00.vue'
import Home from '../views/Home.vue'
import Slideshow from '../views/Slideshow.vue'
import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Second from '../components/two'
import Third from '../components/denimunions'
import Four from '../components/dongxiang'
import Supper from '../components/supperstar'
import Supperone from '../components/supperone'
import Class from '../components/class'
import Cool from '../components/cool'
import Brand from '../components/Brand'

//引入此页面组件 https://lee.com.cn/ss20-xline.html
import Ssxline from '../components/Ssxline'
//引入Queensday组件
import Queensday from '../components/Queensday'
// 引入Lee x 曼秀雷敦部分组件
import Mentholatum from '../components/Mentholatum'
// 引入Denimcp组件
import Denimcp from '../components/Denimcp'
//引入组件 Cny
import Cny from '../components/Cny'


import Cooling from '../components/selected_class/Cooling'
import DanNing from '../components/selected_class/DanNing.vue'
import JingDian101 from '../components/selected_class/JingDian101.vue'
import LeeCocacola from '../components/selected_class/LeeCocacola.vue'
import Leesures from '../components/selected_class/Leesures.vue'
import LeexCocacola from '../components/selected_class/LeexCocacola.vue'
import Line from '../components/selected_class/Line.vue'
import xline from '../components/selected_class/xline.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/register',
    component: Register
},
{
    path: '/',
    component: Index
},
{
    path: "/clothing",
    component: resolve => require(["../views/Clothing"], resolve),

},
{
    path: '/brand',
    component: Brand
},
{
    path: '/slideshow',
    component: Slideshow
},
{
    path: '/footer',
    component: Footer
},
{
    path: '/a00',
    component: A00
},
{
    path: '/header',
    component: Header
},
{
    path: '/',
    component: Home
},
{
    path: '/cond',
    component: Second
},
{
    path: '/third',
    component: Third
},
{
    path: '/four',
    component: Four
},
{
    path: '/five',
    component: Supper
},
{
    path: '/supper',
    component: Supperone
}, {
    path: '/shopping',
    component: Commodity
},
{
    path: '/class',
    component: Class
},
{
    path: '/cool',
    component: Cool
},
{
    path: "/cooling",
    component: Cooling
},
{
    path: "/jingDian101",
    component: JingDian101
},
{
    path: "/leeCocacola",
    component: LeeCocacola
},
{
    path: "/danning",
    component: DanNing
},
{
    path: "/leesures",
    component: Leesures
},
{
    path: "/leexcocacola",
    component: LeexCocacola
},
{
    path: "/line",
    component: Line
},
{
    path: "/xline",
    component: xline
},
{
    path: '/leesures',
    component: Leesures
},
{
    path: '/cny',
    component: Cny
},
{
    path: '/denimcp',
    component: Denimcp
},
//女王节
{
    path: '/queensday',
    component: Queensday
},
// 曼秀雷敦
{
    path: '/mentholatum',
    component: Mentholatum
},
//ssxline 
{
    path: '/ssxline',
    component: Ssxline
},
{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import( /* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router