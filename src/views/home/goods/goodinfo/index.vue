<template>
  <div id="goodInfo">
    <div>
      <h1>{{obj.title}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    id: 0,
    obj: {}
  }),
  created () {
    this.id = this.$route.params.id
    this.getGood()
  },
  methods: {
    async getGood () {
      const {
        data: { message, status }
      } = await this.$http.get(`api/goods/getdesc/${this.id}`)
      if (status !== 0) return console.log(message)
      this.obj = message
      console.log(message)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
