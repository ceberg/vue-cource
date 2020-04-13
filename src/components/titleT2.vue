<template>
  <div>
    <div class="title-t2">
      <div class="left">
        <div>{{tname}}</div>
      </div>
      <slot name="right" />
    </div>
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
.title-t2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 0;
  font-size: 16px;
  color: #404254;
  font-weight: bold;
  .left {
    display: flex;
    align-items: center;
    .upright-line {
      width: 4px;
      height: 22px;
      display: inline-block;
      background: red;
      border-radius: 4px;
      margin-right: 3px;
    }
  }
}
</style>