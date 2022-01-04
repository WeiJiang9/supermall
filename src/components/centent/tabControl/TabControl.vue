<template>
  <div class="tab-control" ref="control">
    <ul>
      <li v-for="(item,index) in title" :key="index" :class="{activeStyle:index === currentIndex}"
      @click="itemClick(index)">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      title: ['精选','新款','流行'],
      currentIndex: 0,
      offsetY: ''
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick',index)
    }
  }
/*   mounted()  {
    this.offsetY = this.$refs.control.offsetTop
    console.log(this.offsetY);
  } */
}
</script>

<style scoped>
  .tab-control{
    width: 100%;
    background-color: #fff;
    position: sticky;
    top: 44px;
    left: 0;
    z-index: 1;
  }
  .tab-control ul{
    list-style: none;
    width: 100%;
    height: 40px;
    line-height: 30px;
    display: flex;
    justify-content: space-around;
  }
  .tab-control ul li span{
    padding: 5px;
  }
  .activeStyle{
    color: #ff8198;
  }
  .activeStyle span {
    border-bottom: 3px solid #ff8198;
  }
</style>