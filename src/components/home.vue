<template>
  <div>
    <div class="rooms">
      <h1>最近聊天记录</h1>
      <div class="room" @click="chatwindow('room1')">
        <div>
          <img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=25302665e3cd7b89fd6132d16e4d29c2/728da9773912b31b4166eb868318367adab4e113.jpg" width="45px" height="45px"><p>聊天室1</p>
          <span v-show="this.bubble1" class="bubble">{{bubble1}}</span>
        </div>
        <span class="iconfont icon-voice"></span></div>
      <div class="room">
        <div>
          <img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=f72f14972d381f308a1485fbc868276d/b90e7bec54e736d1462eaaa79e504fc2d562695b.jpg"  width="45px" height="45px"><p>聊天室2</p>
          <span v-show="this.bubble2" class="bubble">{{bubble2}}</span>
        </div>
        <span class="iconfont icon-voice"></span></div>
    </div>
    <transition name="room">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bubble1: 0,
      bubble2: 0
    }
  },
  methods: {
    chatwindow (room) {
      this.$router.push('/home/room1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.room-leave-active, .room-enter-active {
  transition: all  .5s ease;
}
.room-leave-to, .room-enter {
  transform: translateX(100%);
  // opacity: 0;
}
h1 {
  font-size: 32px;
  font-weight: 300;
}
.rooms {
  padding: 32px;
  border-bottom: 1px solid #f3f3f3;
  .room {
    div {
      position: relative;
      display: flex;
      align-items: center;
      img {
        margin-right: 32px;
        border-radius: 50%;
      }
      .bubble {
        position: absolute;
        left: 48px;
        top: -16px;
        display: block;
        width: 58px;
        height: 36px;
        background: red;
        line-height: 36px;
        font-size: 25px;
        text-align: center;
        font-weight: 500;
        border-radius: 18px;
        color: white;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
}
.child-view {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 100;
}
</style>
