<template>
  <div id="photoinfo">
    <div>
      <h2>{{obj.title}}</h2>
      <li>
        {{obj.add_time}}
        <span>阅读 {{obj.click}}</span>
      </li>
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index" @click="showImg(index)">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <p>{{obj.content}}</p>
      <hr />
    </div>
    <comment :commentlist="commentlist" @postcomment="postcomment" :getMore="getMore"></comment>
  </div>
</template>
<script>
import comment from '@/components/comment'
export default {
  data: () => ({
    id: 0,
    obj: {},
    images: {},
    text: '',
    commentlist: [],
    pageindex: 1,
    limit: 2,
    testcount: false
  }),
  created () {
    this.id = this.$route.params.imgid
    this.getImageInfo()
    this.getThumImages()
    this.getComment()
  },
  methods: {
    async getImageInfo () {
      const {
        data: { message, status }
      } = await this.$http.get(`api/getimageInfo/${this.id}`)
      if (status !== 0) return console.log(message)
      this.obj = message
    },
    async getThumImages () {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getthumimages/${this.id}`)
      if (status !== 0) return console.log(message)
      let arr = []
      message.forEach(el => {
        if (el.src) {
          arr.push(el.src)
        }
      })
      this.images = arr
    },
    showImg (startPosition) {
      this.$ImagePreview({
        images: this.images,
        startPosition
      })
    },
    async getComment () {
      if (this.testcount !== false) return alert('没有更多了')
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`)
      if (status !== 0) return console.log(message)
      this.commentlist = this.commentlist.concat(message)
      this.testcount = this.pageindex * this.limit > count
    },
    async postcomment (data) {
      if (!this.text) return alert('请输入内容')
      const {
        data: { message, status }
      } = await this.$http.post(`api/postcomment/${this.id}`, { artid: this.id, content: data })
      if (status !== 0) return console.log(message)
      this.commentlist.unshift({
        add_time: Date.now(),
        artid: this.id,
        content: data,
        user_name: '匿名用户'
      })
      this.text = ''
    },
    getMore () {
      this.pageindex++
      this.getComment()
    }
  },
  components: {
    comment
  }
}
</script>
<style lang='less' scoped>
#photoinfo {
  h2{
    text-align: center;
    color: red;
  }
  li{
    list-style: none;
    padding: 5px 10px;
    span{
      float:right;
    }
  }
  .swipe {
    padding: 4px;
    img {
      width: 100%;
      height: 260px;
    }
  }
  p{
    text-indent: 2em;
    padding: 5px;
  }
}
</style>
