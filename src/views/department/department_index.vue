<template>
  <div>
    <div class="content">
      <div class="num-blocks">
        <div class="num-block">
          <div class="left">
            <div class="icon">
              <Icon type="ios-checkmark" />
            </div>
            <div class="name">待办项</div>
          </div>
          <div class="num">09</div>
        </div>
        <div class="num-block">
          <div class="left">
            <div class="icon">
              <Icon type="ios-checkmark" />
            </div>
            <div class="name">待办项</div>
          </div>
          <div class="num">09</div>
        </div>
      </div>
      <div class="table-box">
        <div class="wrapper">
          <div class="table"></div>
        </div>
        <div class="wrapper">
          <div class="table"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  background: #eaeaea;
  padding: 20px;
}
.num-blocks {
  display: flex;
  background: #fff;
  padding: 10px;
}
.num-block {
  width: 220px;
  height: 80px;
  background: yellow;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  .left {
    width: 50px;
    .icon {
      font-size: 25px;
      text-align: center;
    }
    .name {
      font-size: 15px;
    }
  }
  .num {
    font-size: 35px;
    line-height: 80px;
  }
}
.table-box {
  display: flex;
  .wrapper {
    width: 50%;
    padding: 10px;
    .table {
      background-color: red;
      height: 200px;
    }
  }
}
</style>