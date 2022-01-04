<template>
  <div class="goods">
    <goods-item class="goodsitem" v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem"

  export default {
    name: 'Goods',
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
  }
</style>