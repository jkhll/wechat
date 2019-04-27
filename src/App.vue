<template>
  <div id="app">
    <router-view/>
    <div class="buttom">
      <div class="home">
        <router-link to="/">
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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope lang="scss">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

#app {
  height: 100%;
  width: 100%;
}
.buttom {
  position: fixed;
  display: flex;
  border-top: 1.5px solid #f3f3f3;
  bottom: 0;
  z-index: 102;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  .home {
    font-size: 14px;
    width: 100%;
  }
  .home:focus {
    color: blue;
  }
  .my:focus {
    color: blue;
  }
  .my {
    font-size: 14px;
    color: blue;
    width: 100%;
  }
}
.iconfont {
  font-size: 28px;
}
</style>
