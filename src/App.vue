<template>
  <router-view></router-view>

  <br />
  <br />
  <br />
  <hr />

  <h1>路由构建</h1>
  <router-link to="/">去首页</router-link><br />
  <router-link to="/about">关于我们</router-link><br />

  <br />
  <hr />

  <h1>路由操作</h1>

  <p>
      接收 query 参数的时候 需要使用 path属性<br />
      接收 params 参数的时候 需要使用 name属性<br />
  </p>

  <!-- 路由跳转组件 -->
  <router-link to="/list">跳转到列表路由(无参数)</router-link><br />
  <router-link :to="{path:'/list', query:{keyword:123}}">跳转到列表路由(有参数)</router-link><br />
  <router-link :to="{name:'info', params:{id:100}}">跳转到详细页面路由</router-link><br />

  <br />
  <hr />

  <h1>路由嵌套</h1>
  <router-link to="/user">会员中心</router-link><br />
  <router-link to="/user/address">会员中心下面的收货地址</router-link><br />

  <br />
  <hr />

  <h1>操作方法</h1>
  <button @click="demo1">按钮跳转首页</button><br />
  <button @click="demo2">按钮跳转会员中心</button><br />
  <button @click="demo3">刷新界面</button><br />

  <br />
  <hr />

  <h1>路由守卫</h1>
  <router-link to="/order">会员订单列表</router-link><br />
  <router-link to="/login">登录界面</router-link><br />

  <br />
  <hr />
</template>


<script setup>
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  function demo1()
  {
    router.push('/')
  }

  function demo2()
  {
    //普通跳转
    // router.push('/user')

    //带params参数跳转
    // router.push({name: '/user', params:{id:'参数值'}})

    //带query参数跳转
    router.push({path: '/user', query:{keyword:'参数值'}})
  }

  function demo3()
  {
    //刷新当前界面
    router.go(0)

    //后退
    // router.go(-1)

    // 前进
    // router.go(1)
  }
</script>

<style>
  .active{
    color:red;
    font-size:22px;
    text-decoration: none;
  }
</style>