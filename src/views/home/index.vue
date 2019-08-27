<template>
  <div id="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="home_swipe">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <a href>
          <img :src="item.img" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" class="home_grid">
      <!-- props 给子组件传递数据 -->
      <van-grid-item
        v-for="item in gridList"
        :key="item.id"
        :text="item.title"
        :to="item.to"
        :props="item"
      >
        <!-- slot插槽 接收数据 -->
        <template slot="icon">
          <img :src="item.src" alt />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data: () => ({
    imgList: null,
    gridList: null
  }),
  created () {
    this.getImg()
    this.getGrids()
  },
  methods: {
    // 获取轮播图片数据
    async getImg () {
      const {
        data: { message, status }
      } = await this.$http.get('api/getlunbo')
      if (status !== 0) return message
      this.imgList = message
    },
    // 获取九宫格数据
    async getGrids () {
      const {
        data: { message, status }
      } = await this.$http.get('api/girds')
      if (status !== 0) return message
      this.gridList = message
    }
  }
}
</script>
<style lang='less' scoped>
#home {
  .home_swipe {
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .home_grid {
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: block;
      margin-bottom: 5px;
    }
  }
}
</style>
