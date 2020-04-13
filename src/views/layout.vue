<template>
  <div class="main-content">
    <div class="header">
      <div class="wrapper">
        <div class="title left"></div>
        <div class="right">
          <div class="category content">
            <ul class="list">
              <li>首页</li>
              <li class="active">惠企政策</li>
              <li>政策项目</li>
              <li>项目审核</li>
              <li>公告管理</li>
            </ul>
          </div>
          <div class="account">
            <p>石建军</p>
            <p class="login-out">退出</p>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="wrapper">
        <router-view />
      </div>
    </div>
    <div class="footer">
      Copyright 2017~2018
      <span style="margin-right:10px"></span> 技术支持：鸿程系统
      <span style="margin-right:30px"></span> 沪ICP备15050430号
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
$dark-blue: #184493;
.main-content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .body {
    flex: 1;
    padding-bottom: 20px;
  }
  .footer {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    background-color: $dark-blue;
    text-align: center;
  }
}
.header {
  background: linear-gradient(
    to right,
    rgba(0, 53, 178, 1) 0%,
    rgba(73, 0, 158, 1) 52%,
    rgba(22, 0, 68, 1) 100%
  );
  opacity: 0.9;
  width: 100%;
  .wrapper {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .content {
    flex: 1 0 auto;
    .list li {
      width: 120px;
      height: 100%;
      line-height: 80px;
      text-align: center;
      font-size: 16px;
      &.active {
        background: #008aff;
      }
    }
  }
}
.header {
  color: #fff;

  .left {
    flex: 0 0 265px;
    background: url("../assets/img/logo.png");
    background-repeat: no-repeat;
    background-position: left center;
  }
  .right {
    justify-content: space-between;
    display: flex;
  }
  .list {
    display: flex;
    list-style: none;
    font-size: 16px;
  }
  .account {
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    .login-out {
      color: $blue;
    }
  }
}
.body {
  background: #eaeaea;
  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>