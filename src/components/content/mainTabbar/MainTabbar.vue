<template>
  <tab-bar>
    <tab-bar-item path="/home" color="#ff5777">
      <img slot="tab-bar-logo-active" src="~@a/img/tabbar/home_active.svg" alt="">
      <img slot="tab-bar-logo-default" src="~@a/img/tabbar/home.svg" alt="">
      <div slot="tab-bar-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" color="#ff5777">
      <img slot="tab-bar-logo-active" src="~@a/img/tabbar/category_active.svg" alt="">
      <img slot="tab-bar-logo-default" src="~@a/img/tabbar/category.svg" alt="">
      <div slot="tab-bar-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" color="#ff5777">
      <img slot="tab-bar-logo-active" src="~@a/img/tabbar/cart_active.svg" alt="">
      <img slot="tab-bar-logo-default" src="~@a/img/tabbar/cart.svg" alt="">
      <div slot="tab-bar-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" color="#ff5777">
      <img slot="tab-bar-logo-active" src="~@a/img/tabbar/profile_active.svg" alt="">
      <img slot="tab-bar-logo-default" src="~@a/img/tabbar/profile.svg" alt="">
      <div slot="tab-bar-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
  import TabBar from 'common/tabbar/TabBar'
  import TabBarItem from 'common/tabbar/TabBarItem'

  export default {
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
