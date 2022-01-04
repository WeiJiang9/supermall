<template>
  <div class="goods-item" @click="itemClick">
    <img v-if="goodsItem.show" :src="goodsItem.show.img" alt="" class="item-img">
    <img v-else :src="goodsItem.image" alt="" class="item-img">
    <p class="item-text">{{goodsItem.title}}</p>
    <p class="item-price"><span class="price">￥{{goodsItem.price}}</span><span class="cfav">{{goodsItem.cfav}}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick(){
        this.$router.push('/details' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    padding: 0 5px;
    width: 50%;
    font-size: 13px;
  }
  .item-img{
    width: 100%;
    border-radius: 10px;
  }
  .item-text{
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文字不换行 */
    white-space: nowrap;
    padding: 0 10px;
    line-height: 15px;
  }
  .item-price{
    display: flex;
    justify-content: space-around;
    line-height: 25px;
  }
  .price{
    color: #ff8198;
  }
  .cfav{
    position: relative;
  }
  .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>