<template>
  <div class="main-tab-bar">
    <tab-bar class="tab-bar">
      <tab-bar-item link="/home">
        <p slot="tab-bar-text">首页</p>
        <img slot="tab-bar-icon" src="~@/assets/img/tabbar/home.svg" alt="">
        <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/home_active.svg" alt="">
      </tab-bar-item>

      <tab-bar-item link="/category">
        <p slot="tab-bar-text">分类</p>
        <img slot="tab-bar-icon" src="~@/assets/img/tabbar/category.svg" alt="">
        <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/category_active.svg" alt="">
      </tab-bar-item>

      <tab-bar-item link="/cart">
        <p slot="tab-bar-text">购物车</p>
        <img slot="tab-bar-icon" src="~@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <p slot="tab-bar-text">我的</p>
        <img slot="tab-bar-icon" src="~@/assets/img/tabbar/profile.svg" alt="">
        <img slot="tab-bar-icon-active" src="~@/assets/img/tabbar/profile_active.svg" alt="">
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabBar/TabBar"
  import TabBarItem from "@/components/common/tabBar/TabBarItem"
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>
<style scoped>

 .main-tab-bar{
   width: 100%;
   position: fixed;
   left: 0;
   bottom: 0;
   z-index: 99;
 }

  .tab-bar{
    font-size: 15px;
    background-color: #eee;
  }

  .tab-bar img{
    width: 20px;
    margin-top: 7px;
  }
</style>