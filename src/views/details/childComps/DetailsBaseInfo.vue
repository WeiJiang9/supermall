<template>
  <div v-if="Object.keys(goodsInfo).length !==0" class="details-info">
    <!-- 
      店铺title
     -->
     <div class="info-title">{{goodsInfo.title}}</div>

     <!-- 价格相关信息 -->
     <div class="info-price">
       <span class="n-price">{{goodsInfo.newPrice}}</span>
       <span class="o-price">{{goodsInfo.oldPrice}}</span>
       <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
     </div>
     <!-- 
       销量相关信息
      -->
      <div class="info-columns">
        <span>{{goodsInfo.columns[0]}}</span>
        <span>{{goodsInfo.columns[1]}}</span>
        <span>{{goodsInfo.services[3].name}}</span>
      </div>

      <!-- 配送相关信息 -->
      <div class="info-services">
        <div v-for="(item,index) of getServices" :key="index">
          <img v-if="item.icon" :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailsBaseInfo',
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getServices() {
        let arr = []
        for(let i = 0; i < 3; i++){
          arr.push(this.goodsInfo.services[i])
        }
        return arr
      }
    }
  }
</script>

<style scoped>
.details-info{
  padding: 0 5px;
  border-bottom: 5px solid #eee;
}
  .info-title{
    margin-top: 15px;
  }
  .info-price{
    height: 40px;
    line-height: 40px;
  }
  .info-price .n-price{
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 80, 0);
  }
  .info-price .o-price {
    font-size: 14px;
    text-decoration: line-through;
    margin: 0 10px;
  }
  .info-price .discount{
    background-color: rgb(255,80,0);
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 13px;
    color: #fff;
  }
  .info-columns{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #aaa;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
  .info-services{
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
  .info-services img {
    width: 15px;
    vertical-align: middle;
  }
</style>