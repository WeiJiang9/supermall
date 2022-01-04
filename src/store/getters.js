const getters = {
  getCartList(state) {
    return state.CartList
  },
  getListLength(state) {
    return state.CartList.length
  },
  getCalculate(state) {
    let num = 0
    state.CartList.forEach(e => {
      e.checked && num++
    })
    return num
  },
  getTotalPrice(state) {
    let price = 0
    state.CartList.forEach(e => {
      if(e.checked) {
        price += Math.round((e.lowNowPrice * e.count))
      }
    })
    return price
  },
  getAllChecked(state) {
    if(state.CartList.length !== 0){
      return !state.CartList.some(e => !e.checked)
    }else{
      return false
    }
  }
}

export default getters