//引入路由对象
import { createRouter, createWebHashHistory, createWebHistory, createMemoryHistory } from "vue-router"

//引入组件
import home from './components/home.vue'
import about from './components/about.vue'
import list from './components/list.vue'
import info from './components/info.vue'
import user from './components/user.vue'
import address from './components/address.vue'
import login from './components/login.vue'
import order from './components/order.vue'

// 创建路由
export default createRouter({
    history: createWebHashHistory(), //hash路由模式
    // history: createWebHistory(), //H5历史记录模式
    // history: createMemoryHistory(), //创建一个基于内存的历史记录模式
    linkExactActiveClass: 'active',  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            //默认首页
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/list',
            name: 'list',
            component: list
        },
        {
            path: '/info/:id',
            name: 'info',
            component: info
        },
        {
            path: '/user',
            name: 'user',
            component: user,
            children: [ //加载子路由
                {
                    path:'address',
                    component:address
                }
            ]
        },
        {
            path: '/order',
            name: 'order',
            component: order,
            //给这个路由添加自定义信息, 让改路由在登录状态下才能访问
            meta: {
                IsLogin: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            // 组件内的守卫
            beforeRouteEnter(to, from, next)
            {
                //进入路由前
                // 在渲染该组件的对应路由被 confirm 前调用
                // 不！能！获取组件实例 `this`
                // 因为当守卫执行前，组件实例还没被创建
            },
            beforeRouteUpdate(to, from, next) 
            {
                //更新路由前
                // vue(2.2版本 新增)
                // 在当前路由改变，但是该组件被复用时调用
                // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                // 可以访问组件实例 `this`
            },
            beforeRouteLeave(to, from, next)
            {
                //离开路由前
                // 导航离开该组件的对应路由时调用
                // 可以访问组件实例 `this`
            }
        },
    ]
})