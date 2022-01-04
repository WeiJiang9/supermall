const actions =  {
  addCart(context,payload) {
    let oldProduct = context.state.CartList.find(e => e.iid === payload.iid)
    if(oldProduct){
      context.commit('addCount',oldProduct)
    }else{
      payload.count =  1;
      payload.checked = true
      context.commit('addToCart',payload)
    }
  }
}

export default actions