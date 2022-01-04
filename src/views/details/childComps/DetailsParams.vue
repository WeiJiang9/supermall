<template>
  <div class="details-params">
    <ul class="rule">
      <li v-for="(item,index) in rule[0]" :key="index">
        <span v-for="(value,index) in item" :key="index">{{value}}</span>
      </li>
    </ul>
    <ul class="params">
      <li v-for="item of params" :key="item.index">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'DetailsParams',
    props: {
      params: {
        type: Array,
        default() {
          return []
        }
      },
      rule:{
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .details-params{
    padding: 0 10px 30px;
    margin-top: 10px;
    border-bottom: 5px solid #eee;
  }
  ul>li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  ul>li>span{
    display: inline-block;
  }
  ul>li>span:first-child{
    width: 30%;
  }
  .rule span:nth-child(n+2){
    width: 15%;
  }
  .params>li>span{
    color: #f60;
    font-size: 14px;
  }
  .params>li>span:last-child{
    overflow: hidden;
    white-space: nowrap;
    width: 65%;
    text-overflow: ellipsis;
  }
</style>