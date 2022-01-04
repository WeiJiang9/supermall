<template>
  <div class="nav-bar">
    <div class="nav-left" >
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-content">
      <slot  name="nav-content"></slot>
    </div>
    <div class="nav-right">
      <slot  name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    text-align: center;
    background-color: #ff8198;
    color: #fff;
  }

  .nav-left,.nav-right{
    width: 60px;
  }
  .nav-content{
    flex: 1;
  }
</style>