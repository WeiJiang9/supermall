<template>
  <nav-bar  class="details-nav">
    <div slot="nav-left" class="details-nav-left" @click="backClick">
      <img src="~@/assets/img/common/back.svg" alt="">
    </div>
    <ul slot="nav-content">
      <li v-for="(item,index) in title" :key="index" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
        {{item}}
      </li>
    </ul>
  </nav-bar>
</template>
<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'DetailsNavBar',
    data() {
      return {
        title: ['商品','参数','评价','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .details-nav{
    background-color: #fff;
    color: rgba(0,0,0,0.5);
    font-size: 14px;
    color: #000;
    border-bottom: 1px solid #eee;

  }
  .details-nav ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .details-nav-left img{
    vertical-align: middle;
    width: 20px;
  }
  .active{
    color: #ff8198;
  }
</style>