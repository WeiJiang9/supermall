<template>
  <div v-if="Object.keys(shopInfo).length!==0" class="shop-info">
    <!-- 店铺loog和名字 -->
    <div class="shop-title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.shopName}}</span>
    </div>
    <div class="shop-name">
      <!-- 销量和商品数 -->
      <div class="shop-goods">
        <div>
          <span>{{shopInfo.sells}}</span>
          <span>总销量</span>
        </div>
        <div>
          <span>{{shopInfo.goods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <!-- 店铺评价 -->
      <div class="shop-score">
        <div v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{red: item.isBetter}">{{item.score}}</span>
          <span class="color-red" v-if="item.isBetter">高</span>
          <span class="color-green" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="btn">进店逛逛</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailsShopInfo',
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 0 10px;
  }
  .shop-title{
    height: 100px;
    line-height: 100px;
    line-height: 100px;
    font-weight: bold;
  }
 .shop-title img {
   width: 50px;
   vertical-align: middle;
   margin-right: 20px;
   border-radius: 50%;
   border: 1px solid #ccc;
 }
 .shop-name{
   display: flex;
 }
  .shop-name>div{
    flex: 1;
  }
 .shop-goods {
   display: flex;
   justify-content: space-around;
   text-align: center;
   border-right: 1px solid #ccc;
   font-size: 15px;
 }
 .shop-goods div{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
 }
 .shop-score{
   text-align: center;
   line-height: 30px;
   font-size: 15px;
 }
 .shop-score span:nth-child(2) {
   display: inline-block;
   width: 50px;
   color: forestgreen;
 }
 .red{
   color: red !important;
 }
 .color-red{
   color: #fff;
   background-color: red;
   font-size: 14px;
 }
 .color-green{
   color: #fff;
   background-color:forestgreen;
   font-size: 14px;

 }
 .btn{
   width: 100px;
   height: 30px;
   line-height: 30px;
   background-color: #ccc;
   color: #fff;
   border-radius: 15px;
   font-size: 19px;
   text-align: center;
   border: 1px solid #aaa;
   margin: 0 auto;
   margin-top: 5px;
 }
</style>