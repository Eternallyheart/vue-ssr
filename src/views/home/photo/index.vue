<template>
  <div class="photo">
    <van-tabs @change="getImage">
      <van-tab v-for="(photo,index) in list" :key="index" :title="photo.title">
        <template v-if="images.length!==0" >
          <router-link v-for="(img,index) in images" :key="index" class="show" tag="div" :to="'/home/photoinfo/'+img.id">
            <img v-lazy="img.img_url" />
          </router-link>
        </template>
        <div v-else class="noimage">当前无图片加载</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data: () => ({
    list: [],
    images: []
  }),
  methods: {
    async getImageList () {
      const {
        data: { message, status }
      } = await this.$http.get('api/getimgcategory')
      if (status !== 0) return console.log(message)
      message.unshift({ id: 0, title: '全部' })
      this.list = message
    },
    async getImage (index) {
      const {
        data: { message, status }
      } = await this.$http.get(`api/getimages/${index}`)
      if (status !== 0) return console.log(message)
      this.images = message
    }
  },
  created () {
    this.getImageList()
    this.getImage(0)
  },
  mounted () {}
}
</script>

<style lang='less' scoped>
.photo {
  .noimage {
    text-align: center;
    color: red;
    padding: 20px;
  }
  .show {
    padding: 4px;
    img {
      width: 100%;
    }
  }
}
</style>
