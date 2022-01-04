<template>
  <div>
    <p class="p1"></p>
    <details-nav-bar ref="nav" @itemClick="itemClick"></details-nav-bar>
    <details-swiper ref="details-swiper" :img="topImg"></details-swiper>
    <details-base-info :goodsInfo="goodsInfo"></details-base-info>
    <details-shop-info :shopInfo="shopInfo"></details-shop-info>
    <details-info-desc ref="details-desc" :detailsInfo="detailsInfo" @imgLoad="imgLoad"></details-info-desc>
    <details-params :params="params" :rule="rule"></details-params>
    <details-rate ref="details-rate" :rate="rate"></details-rate>
    <goods ref="details-goods" :goods="recommend" class="goods"></goods>
    <p class="p2"></p>
    <details-bottom-bar @addToCart="addToCart"></details-bottom-bar>
  </div>
</template>

<script>
  import DetailsNavBar from "./childComps/DetailsNavBar"
  import DetailsSwiper from "./childComps/DetailsSwiper"
  import DetailsBaseInfo from "./childComps/DetailsBaseInfo"
  import DetailsShopInfo from "./childComps/DetailsShopInfo"
  import DetailsInfoDesc from "./childComps/DetailsInfoDesc"
  import DetailsParams from "./childComps/DetailsParams"
  import DetailsRate from "./childComps/DetailsRate"
  import Goods from "@/components/centent/goods/Goods"
  import DetailsBottomBar from "./childComps/DetailsBottomBar"

  import {getDetails,GoodInfo,ShopInfo,getRecommend} from "@/network/details"

  export default {
    name: 'Details',
    components: {
      DetailsNavBar,
      DetailsSwiper,
      DetailsBaseInfo,
      DetailsShopInfo,
      DetailsInfoDesc,
      DetailsParams,
      DetailsRate,
      Goods,
      DetailsBottomBar
    },
    data() {
      return {
        iid: '',
        topImg: [],
        goodsInfo: {},
        shopInfo: {},
        detailsInfo: {},
        params: [],
        rule: [],
        rate: {},
        recommend: [],
        offsetTops: [],
        windowScrollTop: '',
        currentIndex: 0
      }
    },
    methods: {
      getOffsetTop(ref) {
        let currentEl = this.$refs[ref].$el
        let offsetTop = currentEl.offsetTop - 44
        return offsetTop
      },
      imgLoad() {
        let a = this.getOffsetTop('details-swiper')
        let b = this.getOffsetTop('details-desc')
        let c = this.getOffsetTop('details-rate')
        let d = this.getOffsetTop('details-goods')
        this.offsetTops.push(a,b,c,d,Number.MAX_VALUE)
      },
      itemClick(index) {
        window.scrollTo({
          top: this.offsetTops[index],
          behavior: 'smooth'
        })
      },
      addToCart() {
        const product = {}
        product.img = this.topImg[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc
        product.lowNowPrice = this.goodsInfo.lowNowPrice
        product.iid = this.iid
        this.$store.dispatch('addCart',product)
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetails(this.iid).then(res => {
        let data = res.data.result
        this.topImg = data.itemInfo.topImages
        this.goodsInfo = new GoodInfo(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.detailsInfo = data.detailInfo
        this.params = data.itemParams.info.set
        this.rule = data.itemParams.rule.tables
        data.rate && (this.rate = data.rate)
      }),
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      }),
      window.addEventListener('scroll',() => {
        this.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        for(let i = 0; i < this.offsetTops.length - 1; i++){
          if(this.currentIndex !== i) {
            if(this.windowScrollTop >= this.offsetTops[i] && this.windowScrollTop < this.offsetTops[i+1]){
              this.$refs.nav && (this.$refs.nav.currentIndex = this.currentIndex = i)
            }
          }
        }
      })
    }
  }
</script>

<style scoped>
  .p1{
    height: 44px;
  }
  .p2{
    height: 49px;
  }
</style>