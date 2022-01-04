<template>
  <div>
    <cart-list-item v-for="item of getCartList" :key="item.index" :cartItem="item"></cart-list-item>
  </div>
</template>
<script>
  import CartListItem from "./CartListItem"

  import {mapGetters} from 'vuex'

  export default {
    name: 'CartList',
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['getCartList'])
    }
  }
</script>

<style scoped>

</style>