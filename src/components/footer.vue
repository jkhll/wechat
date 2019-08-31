<template>
        <div class="buttom">
      <div class="home">
        <router-link to="/home">
          <p class="iconfont icon-home"></p>
          <p>主页</p>
        </router-link>
      </div>
      <div class="my">
        <router-link to="/config">
          <p class="iconfont icon-address"></p>
          <p>我的</p>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.buttom {
  position: fixed;
  display: flex;
  border-top: 3px solid #f3f3f3;
  bottom: 0;
  z-index: 99;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  .home {
    font-size: 36px;
    width: 100%;
  }
  .my {
    font-size: 36px;
    width: 100%;
  }
  a {
    color: black;
  }
  .router-link-active {
    color: #2196f3;
    font-weight: 600;
  }
}
</style>
