<template>
  <div id="goods">
    <router-link v-for="good in goods" :key="good.id" tag="figure" :to="'/home/goodinfo/'+good.id">
      <img :src="'http://localhost:5000/'+good.img_url" alt />
      <figcaption>
        <h2>{{good.zhaiyao}}</h2>
        <li>
          <span class="sell_price">¥{{good.sell_price}}</span>
          <span class="market_price">¥{{good.market_price}}</span>
        </li>
        <p>
          <span class="stock_quantity">库存 {{good.stock_quantity}}</span>
          <span class="click">阅读 {{good.click}}</span>
        </p>
      </figcaption>
    </router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    goods: []
  }),
  created () {
    this.getGoods()
  },
  methods: {
    async getGoods () {
      const {
        data: { message, status }
      } = await this.$http.get('api/getgoods')
      if (status !== 0) return console.log(message)
      message.splice(3)
      this.goods = message
      console.log(message)
    }
  }
}
</script>
<style lang='less' scoped>
#goods {
  padding: 5px;
  overflow: hidden;
  figure {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 48%;
    float: left;
    height: 300px;
    border: 1px solid #cdcdcd;
    box-shadow: 1px 1px 1px #cdcdcd, -1px -1px 1px #cdcdcd;
    padding: 10px 0;
    margin: 1%;
    border-radius: 2px;
    h2 {
      height: 30px;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      text-overflow: ellipsis;
      padding: 5px;
      margin: 0;
      line-height: 30px;
      user-select: none;
    }
    li {
      list-style: none;
      padding: 5px;
      text-align: center;
      .sell_price {
        color: red;
        margin-right: 50px;
      }
      .market_price {
        text-decoration: line-through;
        color: #999;
        margin-right: 5px;
      }
    }
    p {
      margin: 0;
      padding: 5px;
      font-size: 12px;
      text-align: center;
      .stock_quantity {
        margin-right: 55px;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
