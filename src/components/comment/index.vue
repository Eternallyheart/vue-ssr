<template>
  <div id="comment">
    <h2>发表评论</h2>
    <textarea class="textarea" v-model="text" ></textarea>
    <van-button plain type="danger" class="more" @click="report">发表评论</van-button>
    <van-panel
      v-for="(comment,index) in commentlist"
      :title="'第'+(index+1)+'楼 '+comment.user_name+' 发表时间:'"
      :status="comment.add_time|datefmt"
      :key="index"
    >
      <div>{{comment.content}}</div>
    </van-panel>
    <div slot="footer">
      <van-button size="normal" type="danger" plain class="getmore" @click="getMore">{{hasFlag?'被掏空了':'加载更多'}}</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    text: ''
  }),
  props: {
    commentlist: {
      type: Array
    },
    getMore: {
      type: Function
    },
    hasFlag: {
      type: Boolean
    }
  },
  created () {
  },
  methods: {
    report () {
      if (this.text.length === 0) return this.$Toast('请输入内容')
      this.$emit('postcomment', this.text)
      this.text = ''
    }
  }
}
</script>
<style lang='less' scoped>
#comment {
  text-align: left;
  h2 {
    text-indent: 2em;
  }
  .more {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .textarea {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    margin-top: 10px;
    text-indent: 2em;
    padding: 5px 0;
    border-radius: 2px;
  }
  .van-cell {
    background-color: #eee;
    display: block;
    div{
      float: left;
    }
  }
  .van-panel__content {
    padding: 5px;
  }
  .getmore {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    margin-top: 10px;
  }
  .van-cell__value{
    text-align: left;
    color: inherit;
  }
}
</style>
