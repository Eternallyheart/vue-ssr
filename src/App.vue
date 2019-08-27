<template>
  <div id="app">
    <van-nav-bar title="标题" left-text="返回" @click-left="onClickLeft" left-arrow fixed />
    <!-- @click-right="onClickRight" -->
    <router-view class="content"></router-view>
    <van-tabbar>
      <van-tabbar-item name="home" icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/friends">friends</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" info="5" to="/cart">cart</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="/set">setting</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
export default {
  name: 'app',
  components: {},
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
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
  margin-top:46px;
}
</style>
