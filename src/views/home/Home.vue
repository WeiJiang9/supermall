<template>
  <div class="home">
    <nav-bar>
      <div slot="nav-content">购物街</div>
    </nav-bar>
    <h2></h2>
    <swiper :banner="banners[2]"></swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control @itemClick="itemClick" class="tab-control"></tab-control>
    <goods :goods="goods[currentType].list"></goods>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
    <h1 ref="h1"></h1>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import Swiper from "@/components/common/swiper/Swiper"

  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import TabControl from "@/components/centent/tabControl/TabControl"
  import Goods from "@/components/centent/goods/Goods"
  import BackTop from '@/components/centent/backTop/BackTop'

  import {getHomeMultidata,getHomeGoods} from "@/network/home"

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          sell: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          pop: {
            page: 0,
            list: []
          }
        },
        currentType: 'sell',
        scrollTop: '',
        isShowBackTop: false
      }
    },
    components: {
      NavBar,
      Swiper,
      RecommendView,
      FeatureView,
      TabControl,
      Goods,
      BackTop
    },
    methods: {
      itemClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'sell'
            break
          case 1: 
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'pop'
        }
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          let data = res.data.data.list
          this.goods[type].list.push(...data)
        })
      },
      backClick() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      }),
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
      this.getHomeGoods('pop')
    },
    mounted() {
      window.addEventListener('scroll',() => {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        this.isShowBackTop = this.scrollTop > 1000 
      })
    }
  }
</script>

<style scoped>
  h2{
    height: 44px;
  }
  h1{
    height: 49px;
  }
</style>