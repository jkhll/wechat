<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import foot from './components/footer'
export default {
  name: 'App',
  components: {
    foot
  }
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

.iconfont {
  font-size: 66px;
}
</style>
