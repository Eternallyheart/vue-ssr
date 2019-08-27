<template>
  <div id="newone">
    <div>
      <h1>{{obj.title}}</h1>
      <h4>{{obj.zhaiyao}}</h4>
      <li>
        <span class="time">{{obj.add_time}}</span>
        <span class="num">
          阅读&nbsp;&nbsp;
          <mark class="number">1</mark>
        </span>
      </li>
      <hr />
      <img :src="src" alt />
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
    obj: {},
    id: 0,
    src: '',
    commentlist: [],
    pageindex: 1,
    limit: 2,
    testcount: false
  }),
  created () {
    this.id = this.$route.params.newid
    this.src = `http://10.41.151.49:5000/news/images/${this.id}.jpg`
    this.getNew()
    this.getComment()
  },
  methods: {
    async getNew () {
      const {
        data: { message, status }
      } = await this.$http.get(`api/getnew/${this.id}`)
      if (status !== 0) return console.log(message)
      this.obj = message
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
#newone {
  padding: 0 5px;
  text-align: center;
  overflow: scroll;
  h1 {
    color: red;
  }
  img {
    margin-top: 10px;
    width: 100%;
  }
  li {
    padding: 0 20px;
    list-style: none;
    overflow: hidden;
    .time {
      float: left;
    }
    .num {
      float: right;
    }
    .number {
      background-color: #fff;
    }
  }
  p {
    text-align: left;
    margin-bottom: 15px;
  }
}
</style>
