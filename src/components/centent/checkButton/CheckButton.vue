<template>
  <div class="button" :class="{ischeck:checked}">
    <img src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
  export default {
    name: 'CheckButton',
    props: {
      checked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style scoped>
  .button{
    width: 17px;
    height: 17px;
    border: 1px solid #aaa;
    border-radius: 50%;
    margin-right: 5px;
  }
  .button img{
    vertical-align: top;
  }
  .ischeck{
    border-color: red;
    background-color: red;
  }
</style>