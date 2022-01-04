<template>
  <div>
    <nav-bar>
      <p slot="nav-content">购物车({{getListLength}})</p>
    </nav-bar>
    <p class="cart-p1"></p>
    <cart-list></cart-list>
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
    <p class="cart-p2"></p>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import CartList from "./childComps/CartList"
  import CartBottomBar from "./childComps/CartBottomBar"

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['getListLength'])
    }
  }
</script>

<style scoped>
  .cart-p1{
    height: 44px;
  }
  .cart-p2{
    height: 89px;
  }
  .cart-bottom-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
  }

</style>