<template>
  <div id="app">
    <van-nav-bar title="标题" left-text="返回" @click-left="onClickLeft" left-arrow fixed />
    <!-- @click-right="onClickRight" -->
    <keep-alive>
       <router-view class="content"></router-view>
    </keep-alive>
    <van-tabbar>
      <van-tabbar-item name="home" icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/friends">friends</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" :info="$store.getters.getAll" to="/cart" class="v-cart">cart</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="/set">setting</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
  }),
  components: {},
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 52px;
  margin-top: 46px;
}
</style>
