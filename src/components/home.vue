<template>
  <div>
    <div class="rooms">
      <h1>最近聊天记录</h1>
      <div class="room" @click="chatwindow('room1')">
        <div>
          <img src="../assets/logo.png" width="45px" height="45px"><p>聊天室</p>
          <span v-show="this.bubble1" class="bubble">{{bubble1}}</span>
        </div>
        <span class="iconfont icon-voice"></span></div>
      <!-- <div class="room" @click="chatwindow('room2')">
        <div>
          <img src="../assets/logo.png"  width="45px" height="45px"><p>聊天室2</p>
          <span v-show="this.bubble2" class="bubble">{{bubble2}}</span>
        </div>
        <span class="iconfont icon-voice"></span></div> -->
    </div>
    <div class="idea" id="idea" v-if="show">
      <div class="wrapper">
        <div class="message">
          <p>提示</p>
          <p>需要登录后才能查看哦</p>
        </div>
        <div class="go"><span @click="goLogin">去登陆</span><span @click="goHome">返回首页</span></div>
      </div>
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
      bubble2: 0,
      show: false
    }
  },
  methods: {
    chatwindow (room) {
      if (!this.$store.state.user) {
        this.show = true
      } else {
        this.$router.push(`/home/${room}`)
      }
    },
    goHome () {
      this.$router.push('/home')
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.room-leave-active, .room-enter-active {
  transition: all .5s ease;
}
.room-leave-to, .room-enter {
  transform: translateX(100%);
}
h1 {
  font-size: 32px;
  font-weight: 300;
}
.rooms {
  position: absolute;
  padding: 32px;
  border-bottom: 1px solid #f3f3f3;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
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
.idea {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: .15);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 70vw;
    height: 300px;
    background: white;
    border-radius: 30px;
    text-align: center;
    .message {
      box-sizing: border-box;
      height: 210px;
      padding-top: 60px;
    }
    .go {
      display: flex;
      flex: 1;
      height: 90px;
      color: #0582cd;
      font-weight: 700;
      span {
        padding-top: 20px;
        border-top: 1px solid rgba($color: #3856aa, $alpha: .35);
        width: 50%;
      }
      span:nth-of-type(1) {
        border-right: 1px solid rgba($color: #3856aa, $alpha: .35);
      }
    }
  }
}
</style>
