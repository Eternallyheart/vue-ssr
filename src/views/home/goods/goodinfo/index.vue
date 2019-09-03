<template>
  <div id="goodInfo">
    <div>
      <h1>{{good.zhaiyao}}</h1>
      <figure>
        <img :src="good.img_url" alt />
        <van-notice-bar :text="good.content" left-icon="volume-o" />
        <figcaption>
          <van-panel :title="good.title">
            <div>
              <li>
                市场价格:
                <span class="sell_price">¥{{good.sell_price}}</span>
              </li>
              <li>
                促销价格:
                <span class="market_price">¥{{good.market_price}}</span>
              </li>
              <li>
                数量:
                <van-stepper v-model="value" min="1" :max="good.stock_quantity" />
              </li>
              <!-- 优惠券单元格 -->
              <div
                @click="showPopup"
                position="bottom"
                :style="{ height: '100%' }"
                data-v-30807b8d
                class="van-cell van-cell--clickable van-coupon-cell"
              >
                <div data-v-30807b8d class="van-cell__title">
                  <span data-v-30807b8d>优惠券</span>
                </div>
                <div data-v-30807b8d class="van-cell__value">
                  <span data-v-30807b8d>{{showCoupon?price:coupon.coupons.length+'张可用'}}</span>
                </div>
                <i data-v-30807b8d class="van-icon van-icon-arrow van-cell__right-icon"></i>
              </div>
              <!-- 优惠券列表 -->
              <van-popup v-model="show" position="bottom">
                <van-coupon-list
                  :coupons="coupon.coupons"
                  :chosen-coupon="coupon.chosenCoupon"
                  :disabled-coupons="coupon.disabledCoupons"
                  @change="onChange"
                  @exchange="onExchange"
                />
              </van-popup>
              <!-- 选择收货地址 -->
              <div class="address">
                <span>收货地址</span>
                <span class="area">北京</span>
                <span class="arrow">&gt;</span>
              </div>
              <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                <div v-show="isShow" class="ball" ref="ballRef"></div>
              </transition>
              <van-goods-action>
                <van-goods-action-button type="warning" text="加入购物车" @click="addCart" :disabled="isClick" />
                <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
              </van-goods-action>
            </div>
          </van-panel>
        </figcaption>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
        <div>商品详情</div>
      </figure>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers'
const coupon = [
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元'
  },
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '2',
    unitDesc: '元'
  }
]

export default {
  data: () => ({
    id: 0,
    good: {},
    value: 1,
    show: false,
    showCoupon: false,
    price: null,
    coupon: {
      chosenCoupon: -1,
      coupons: [...coupon],
      disabledCoupons: [...coupon]
    },
    isShow: false,
    isClick: false
  }),
  created () {
    this.id = this.$route.params.id
    this.getGood()
  },
  methods: {
    async getGood () {
      const {
        data: { message, status }
      } = await this.$http.get(`api/goods/getdesc/10${this.id}`)
      if (status !== 0) return console.log(message)
      this.good = message
      console.log(message)
    },
    showPopup () {
      this.show = true
    },
    onChange (index) {
      this.show = false
      this.coupon.chosenCoupon = index
      if (index !== -1) {
        this.showCoupon = true
        this.price = `-¥${this.coupon.coupons[index].valueDesc}${this.coupon.coupons[index].unitDesc}`
      } else {
        this.showCoupon = false
      }
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    onClickIcon () {
      this.$Toast('点击图标')
    },
    onClickButton () {
      this.$Toast('点击按钮')
    },
    addCart () {
      this.isShow = !this.isShow

      this.good.select = true
      this.good.count = this.value
      console.log(this.good)
      this.$store.commit('addCart', this.good)
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // eslint-disable-next-line no-unused-expressions
      el.offsetLeft

      let ball = this.$refs.ballRef.getBoundingClientRect()

      let info = document.querySelector('.v-cart').getBoundingClientRect()
      let xDist = info.left - ball.left + info.width / 2
      let yDist = info.top - ball.top
      el.style.transform = `translate(${xDist}px, ${yDist}px)`
      el.style.transition = 'all .3s ease'
      done()
    },
    afterEnter () {
      this.isShow = false
      this.isClick = true
      setTimeout(() => {
        this.isClick = false
      }, 400)
    }
  }
}
</script>
<style lang='less' scoped>
#goodInfo {
  padding: 5px;
  h1 {
    padding: 4px;
    margin-top: 5px;
    font-size: 18px;
    text-align: center;
    color: red;
  }
  figure {
    width: 100%;
    padding: 2px;
    margin: 0;
    img {
      width: 100%;
    }
    .van-panel {
      .van-cell__title {
        font-size: 16px;
      }
      li {
        position: relative;
        list-style: none;
        padding: 5px 20px;
        font-size: 16px;
        .sell_price {
          color: red;
          font-size: 18px;
        }
        .market_price {
          text-decoration: line-through;
          color: #999;
          margin-right: 5px;
        }
        .click {
          color: red;
        }
        .van-stepper {
          position: absolute;
          top: 0px;
          left: 70px;
        }
      }
      .address {
        padding: 10px 18px;
        display: flex;
        justify-content: space-between;
      }
      .van-goods-action {
        padding: 10px 0;
        position: relative;
      }
      .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 113px;
        left: 108px;
        z-index: 999;
      }
    }
  }
}
</style>
