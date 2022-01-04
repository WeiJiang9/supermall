<template>
  <div id="tab_bar" v-if="!$route.meta.showNav">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  #tab_bar{
    width: 100%;
    height: 49px;
    border-top: 1px solid #eee ;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
</style>