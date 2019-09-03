<template>
  <div id="goods">
    <div class="show">
      <router-link
        v-for="good in goods"
        :key="good.id"
        tag="figure"
        :to="'/home/goodinfo/'+good.id"
      >
        <img :src="good.img_url" alt />
        <figcaption>
          <h2>{{good.zhaiyao}}</h2>
          <li>
            <span class="sell_price">¥{{good.sell_price}}</span>
            <span class="market_price">¥{{good.market_price}}</span>
          </li>
          <p>
            <span class="stock_quantity">剩{{good.stock_quantity}}件</span>
            <span class="click">热卖中 {{good.click}}</span>
          </p>
        </figcaption>
      </router-link>
    </div>
    <div>
      <van-button type="danger" @click="getMore">{{hasFlag?'被掏空了':'加载更多'}}</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pageindex: 0,
    goods: [],
    hasFlag: false,
    limit: 3
  }),
  created () {
    this.getGoods()
    console.log(this.goods)
  },
  methods: {
    async getGoods () {
      if (this.hasFlag !== false) return false
      this.pageindex++
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getgoods?pageindex=${this.pageindex}&limit=${this.limit}`)
      if (status !== 0) return console.log(message)
      this.goods = this.goods.concat(message)

      this.hasFlag = this.pageindex * this.limit > count
    },
    getMore () {
      this.getGoods()
    }
  }
}
</script>
<style lang='less' scoped>
#goods {
  padding: 5px;
  .show {
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
          font-size: 18px;
        }
        .market_price {
          text-decoration: line-through;
          color: #999;
          margin-right: 5px;
          font-size: 14px;
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
        .click {
          color: red;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .van-button {
    width: 100%;
  }
}
</style>
