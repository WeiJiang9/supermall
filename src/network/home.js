import require from "./request"

const getHomeMultidata = () => {
  return require({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}

const getHomeGoods = (type,page) => {
  return require({
    url: 'http://152.136.185.210:7878/api/hy66/home/data',
    params: {
      type,
      page
    }
  })
}

export {getHomeMultidata,getHomeGoods}