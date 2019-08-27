<template>
  <div id="news">
    <van-card
      v-for="news in newsList"
      :desc="news.zhaiyao"
      :key="news.id"
      :title="news.title"
      :thumb="news.img_url"
      @click="send(news.id)"
    >
     <!-- :to="'/home/newone'+news.id" -->
    <div slot="price" >{{news.add_time}}</div>
      <div slot="num">{{news.content}}</div>
    </van-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    newsList: null
  }),
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const {
        data: { message, status }
      } = await this.$http.get('api/getnewslist')
      if (status !== 0) return console.log(message)
      this.newsList = message
    },
    async send (id) {
      this.$router.push({ name: 'newone', params: { newid: id } })
    }
  }
}
</script>
<style lang='less' scoped>
#news {
  .van-card {
    overflow: hidden;
    padding: 10px;
    .van-card__thumb {
      height: inherit;
      img {
        vertical-align: top;
      }
    }
    .van-card__content {
      min-height: inherit;
      .van-card__title {
        font-size: 14px;
      }
      .van-card__num{
        height: 20px;
        text-indent:0;
        overflow: hidden;
      }
    }
  }
}
</style>
