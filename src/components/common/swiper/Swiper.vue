<template>
  <div class="swiper">
    <img :src="banner.image" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      banner: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .swiper{
    width: 100%;
  }
  .swiper img{
    width: 100%;
  }
</style>