<template>
  <div class="recommend">
    <div v-for="(item,index) of recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 10px;
    font-size: 13px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item img {
    width: 80px;
    margin-bottom: 10px;
  }
</style>