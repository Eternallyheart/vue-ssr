import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'

Vue.use(Vuex)

let cart = JSON.parse(localStorage.getItem('cart') || '[]')
export default new Store({
  state: {
    cart
  },
  mutations: {
    addCart (state, goodsinfo) {
      let flag = false
      state.cart.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += goodsinfo.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goodsinfo)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getAll (state) {
      let n = 0
      state.cart.forEach(el => {
        if (el.select === true) {
          n += el.count
        }
      })
      return n
    },
    getAllPrice (state) {
      let p = 0
      state.cart.forEach(el => {
        if (el.select === true) {
          p += el.count * el.sell_price * 100
        }
      })
      return p
    }
  }
})
