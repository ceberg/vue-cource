<template>
  <div>
    <p class="title-t1">
      <img src="@/assets/img/icon-h1.png" />
      {{tname}}
    </p>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.tname);
  },
  props: {
    tname: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.title-t1 {
  line-height: 60px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #5480dc;
  font-weight: bold;
  img {
    margin-right: 10px;
  }
}
</style>