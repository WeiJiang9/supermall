<template>
  <div class="details-bar">
    <div class="bar-left">
      <ul>
        <li>
          <i class="icon"></i>
          <span>收藏</span>
        </li>
        <li>
          <i class="service"></i>
          <span>客服</span>
        </li>
        <li>
          <i class="shop"></i>
          <span>店铺</span>
        </li>
      </ul>
    </div>
    <div class="bar-right">
      <span class="add-cart" @click="addToCart">加入购物车</span>
      <span class="shop">立即购买</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailsBottomBar',
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>
<style scoped>
  .details-bar{
    display: flex;
    height: 52px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    text-align: center;
  }
  .bar-left{
    flex: 1;
  }
  .bar-left ul{
    list-style: none;
    display: flex;
    font-size: 15px;
  }
  .bar-left ul li{
    flex: 1;
  }
  .bar-left ul li i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 2px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: 7px auto 3px ;
  }
  .bar-left .service{
    background-position: 0 -54px;
  }
  .bar-left .shop{
    background-position: 0 -98px;
  }
  .bar-right{
    flex: 1.3;
    line-height: 52px;
    display: flex;
  }
  .bar-right span{
    display: inline-block;
    flex: 1;
    color: #fff;
  }
  .bar-right .add-cart{
    background-color:rgb(255,150,0);
  }
  .bar-right .shop{
    background-color: rgb(255,80,0);
  }
</style>