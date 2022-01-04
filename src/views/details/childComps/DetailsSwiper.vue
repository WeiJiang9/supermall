<template>
  <div class="details-swiper">
    <img :src="img[0]" alt="">
  </div>
</template>
<script>
export default {
  name: 'DetailsSwiper',
  props: {
    img: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .details-swiper{
    height: 500px;
    overflow: hidden;
  }
  .details-swiper img{
    width: 100%;
  }
</style>