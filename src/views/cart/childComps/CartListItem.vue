<template>
  <div class="cart-item">
    <check-button class="check-button" 
      :checked="cartItem.checked"
      @click.native="btnClick"></check-button>
    <img :src="cartItem.img" alt="">
    <div class="cart-text">
      <p class="title">{{cartItem.title}}</p>
      <p class="desc">{{cartItem.desc}}</p>
      <div class="pri">
        <span class="price">￥{{cartItem.lowNowPrice}}</span>
        <span class="cuont">x{{cartItem.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import CheckButton from '@/components/centent/checkButton/CheckButton'

  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    props: {
      cartItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      btnClick() {
        this.$store.commit('changeChecked',this.cartItem)
      } 
    }
  }
</script>

<style scoped>
  .cart-item{
    display: flex;
    padding: 10px;
    border-bottom: 2px solid #ddd;
    position: relative;
  }
  .cart-item img{
    width: 80px;
    margin-left: 20px;
  }
  .cart-text{
    width: 74%;
    padding-left: 10px;
  }
  .cart-item p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cart-text .title{
    font-size: 19px;
    margin-bottom: 15px;
  }
  .cart-text .desc{
    margin-bottom: 30px;
    font-size: 14px;
  }
  .cart-text .pri{
    display: flex;
    justify-content: space-between;
  }
  .pri .price{
    font-size: 16px;
    font-weight: bold;
    color: rgb(255,80,0);
  }

  .check-button{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>