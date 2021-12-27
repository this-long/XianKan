<template>
  <div id="app">
    <div class="main">
      <img class="mainImg" :src="imgsrc" alt="" />
      <button @click="getImg">换一个</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      imgsrc:
        "https://p.ananas.chaoxing.com/star3/origin/9379843d26be11cd950be06a370e5c34.png", //图片地址
    };
  },

  methods: {
    async getImg() {
      var res = await this.$axios.get("/api/youhuo/api.php?return=json");
      if (res.data.code === "200") {
        this.imgsrc = res.data.imgurl;
        console.log(res);
      }
    },
  },
};
</script>

<style>
/* .main {
  position: relative;
} */
.mainImg {
  /* display: block; */
  width: 100%;
  /* height: auto;
  position: absolute;
  top: 50%;
  margin-top: -50%; */
}
</style>
