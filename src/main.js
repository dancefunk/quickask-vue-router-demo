import { createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

//全局前置路由守卫
router.beforeEach((to, from, next) => {
    //to 这个参数代表 去到哪个路由
    //from 这个参数代表 从哪里来
    //next 这个参数代表 是否可以去到下一步
    //我们可以根据to当中是否有meta信息来判断当前的路由是否需要登录
    //这个就是我们常见的判断是否有登录
    var IsLogin = to.meta.IsLogin ? to.meta.IsLogin : false
    //如果IsLogin=true 就说明是需要登录的，否则就不需要登录
    if(IsLogin)
    {
        // 需要登录去到登录界面
        next('/login')
    }else
    {
        //不需要登录直接去到下一步
        next()
    }
})

//全局后置路由守卫
router.afterEach((to, from) => {
    // 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
    // console.log('全局后置路由守卫')
})