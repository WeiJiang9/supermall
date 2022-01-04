const mutations = {
  addToCart(state,payload) {
    state.CartList.push(payload)
  },
  addCount(state,payload) {
    payload.count++
  },
  changeChecked(state,payload) {
    let currenItem = state.CartList.find(e => e.iid === payload.iid)
    currenItem.checked = !currenItem.checked
  },
  AllchangeChecked(state) {
    let flag = state.CartList.some(e => !e.checked)
    if(flag) {
      state.CartList.forEach(e => {
        e.checked = true
      })
    }else{
      state.CartList.forEach(e => {
        e.checked = false
      })
    }
  }
}

export default mutations