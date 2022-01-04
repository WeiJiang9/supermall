<template>
  <div v-if="Object.keys(rate).length!==0" class="details-rate">
    <p class="rate-title">
      <span>用户评价</span>
      <span>更多({{rate.cRate}})</span>
    </p>
    <div>
      <div class="rate-user">
        <img :src="rate.list[0].user.avatar" alt="">
        <span>{{rate.list[0].user.uname}}</span>
      </div>
      <div class="rate-content">{{rate.list[0].content}}</div>
      <div class="rate-style">
        <p>{{rate.list[0].style}}</p>
        <p>
          <span v-for="item of rate.list[0].extraInfo" :key="item.index">
            {{item}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsRate',
  props: {
    rate: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .details-rate{
    padding: 0 10px;
    margin-bottom: 20px;
  }
  .rate-title{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .rate-user{
    line-height: 50px;
  }
  .rate-user img{
    width: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .rate-content{
    font-size: 15px;
    line-height: 20px;
  }
  .rate-style{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #aaa;
    margin-top: 10px;
  }
</style>