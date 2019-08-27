<template>
  <div class="photo">
    <van-tabs sticky>
      <van-tab v-for="photo in list" :key="photo.id" :title="photo.title" style="box-sizing: none"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: null
  }),
  methods: {
    async getImage () {
      const {
        data: { message, status }
      } = await this.$http.get('api/getimgcategory')
      if (status !== 0) return console.log(message)
      this.list = message
    }
  },
  created () {
    this.getImage()
  },
  mounted () {
    console.log(document.getElementsByClassName('van-tab'))
    let items = document.querySelectorAll('.van-tab')
    items.forEach((el) => {
      console.log(el)
    })
  }
}
</script>

<style lang='less' scoped>
.van-tab {
  box-sizing: content-box;
}
</style>
