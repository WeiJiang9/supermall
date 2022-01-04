<template>
  <div v-if="Object.keys(detailsInfo).length!==0" class="details-info-desc">
    <!-- 描述 -->
    <div class="desc">
      <span class="span-left"></span>
      {{detailsInfo.desc}}
      <span class="span-right"></span>
    </div>
    <div class="img" v-for="item in detailsInfo.detailImage" :key="item.index">
      <p>{{item.key}}</p>
      <img v-for="img of item.list" :key="img" :src="img" alt="" @load="imgLoad">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsInfoDesc',
  data() {
    return {
      timerid: ''
    }
  },
  props: {
    detailsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    debounce(fn,time=500) {
      this.timerid && clearTimeout(this.timerid)
      this.timerid = setTimeout(() => {
        fn()
      },time)
    } ,
    imgLoad()  {
      this.debounce(() =>{
        this.$emit('imgLoad')
      })
    }
  }
}
</script>

<style scoped>
  .details-info-desc{
    padding: 0 5px;
    margin-top: 20px;
  }
  .img img{
    width: 100%;
  }
  .img p {
    padding: 15px;
  }
  .desc{
    margin-bottom: 10px;
    padding: 10px;
    position: relative;
    font-size: 15px;
    line-height: 20px;
  }
  .desc span{
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #000;
  }
  .desc .span-left{
    left: 0;
    top: 0;
  }
  .desc .span-right{
    bottom: 0;
    right: 0;
  }
</style>