<template>
  <div class="cart-bar">
    <div class="btn" @click="checkClick">
      <check-button class="check-btn" :checked="getAllChecked"></check-button>
      全选
    </div>
    <div>
      合计: ￥{{getTotalPrice}}
    </div>
    <div class="total">
      去结算({{getCalculate}})
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/centent/checkButton/CheckButton'

  import {mapGetters} from 'vuex'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['getCalculate','getTotalPrice','getAllChecked'])
    },
    methods: {
      checkClick() {
        this.$store.commit('AllchangeChecked')
      }
    }
  }
</script>

<style scoped>
  .cart-bar{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color: grab(0,0,0,0.5);
  }
  .btn{
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 20px;
  }
  .total{
    width: 120px;
    background-color: red;
    text-align: center;
    color: #fff;
  }
</style>
