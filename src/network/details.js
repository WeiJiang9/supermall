import require from "./request"

const getDetails = (iid) => {
  return require({
    url: 'http://152.136.185.210:7878/api/hy66/detail',
    params: {
      iid
    }
  })
}

const GoodInfo = class {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.desc = itemInfo.desc;

    this.lowNowPrice = itemInfo.lowNowPrice;
  }
}

const ShopInfo = class {
  constructor(shopInfo) {
    this.shopName = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.sells = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score
  }
}

const getRecommend = () => {
  return require({
    url: 'http://152.136.185.210:7878/api/hy66/recommend'
  })
}

export {getDetails,GoodInfo,ShopInfo,getRecommend}