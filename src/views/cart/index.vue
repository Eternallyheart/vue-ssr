<template>
  <div id="carts">
    <div class="cartList">
      <div v-for="(cart,index) in $store.state.cart" :key="index" class="cart">
        <div class="select">
          <van-switch v-model="cart.select" @change="check" />
        </div>
        <div class="show">
          <img :src="cart.img_url" alt />
        </div>
        <div class="produce">
          <h3>{{cart.title}}</h3>
          <li>{{cart.zhaiyao}}</li>
          <li>¥{{cart.sell_price}}</li>
          <li>
            <van-stepper
              v-model="cart.count"
              @change="change(index)"
              min="1"
              :max="cart.stock_quantity"
            />
          </li>
        </div>
        <div class="delete">
          <van-button type="danger" size="small" class="deleteClick" @click="del($store.state.cart,index)">删除</van-button>
        </div>
      </div>
    </div>
    <van-submit-bar :price="getAllPrice" button-text="提交订单" @submit="onSubmit"></van-submit-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    // carts: [],
    // checked: false,
    // num: -1
  }),
  computed: {
    ...mapGetters(['getAllPrice'])
  },
  created () {
    console.log(this.$store.state.cart)
    // this.getCart()
  },
  methods: {
    del (index) {
      this.$store.state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
    },
    onSubmit () {},
    change () {
      // this.num = index
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
    },
    check (index) {
      console.log(index)
    }
  }
  // watch: {
  // carts: {
  //   immediate: true,
  //   deep: true,
  //   handler: function (newValue, oldValue) {
  //     console.log(newValue, oldValue, this.num)
  //     if (newValue.length === 0) return false
  //     if (this.num !== -1) {
  //       console.log(newValue, oldValue)
  //       this.carts[this.num].count = newValue[this.num].count - oldValue[this.num].count
  //       console.log(this.carts[this.num].count)
  //       // this.$store.commit('addCart', this.carts[this.count])
  //     }
  //   }
  // }
  // }
}
</script>
<style lang='less' scoped>
.margin {
  margin: 75% auto;
}
.box-sizing {
  box-sizing: border-box;
}
.padding {
  padding: 4px;
}
.width1 {
  width: 100%;
}
.width4 {
  width: 40%;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.flex-items {
  display: flex;
  justify-items: center;
}
#carts {
  .width1;
  overflow: hidden;
  .padding;
  .box-sizing;
  .cart {
    display: flex;
    .width1;
    .padding;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    .box-sizing;
    .select {
      .box-sizing;
      .van-switch {
        .margin;
      }
    }
    .show {
      width: 50%;
      .flex-items;
      img {
        .width1;
      }
    }
    .produce {
      padding: 2px 4px;
      .width4;
      h3 {
        padding: 4px 0;
        margin: 0;
      }
      li {
        padding: 4px 0;
        .width1;
        list-style: none;
        .ellipsis;
      }
    }
    .delete {
      .width4;
      .flex-items;
      .deleteClick {
        .margin;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
    input {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
