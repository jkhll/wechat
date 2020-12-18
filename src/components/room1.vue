<template>
    <div class="trap">
        <header class="header">
            <span @click="back">&lt;</span>
            <span>聊天</span>
            <span class="iconfont icon-nickname"></span>
        </header>
        <div class="trapper" @scroll="handleScroll">
           <div ref="content" class="content">
             <div  v-for="item in notes" :key="item[0]">
               <span class="name" ref="name">{{item[0]}}</span>
            <div class="item">
              <div ref="avatar" class="avatar">
                <img src="../assets/logo.png">
              </div>
              <div class="dialog">
                <span class="value" ref="value">{{item[2]}}</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <footer class="foot">
            <div class="icon">
                <span class="iconfont icon-camera"></span>
                <span class="iconfont icon-face"></span>
            </div>
            <div class="main">
                <input ref="input" v-model="input" @keyup.enter="submit">
                <el-button type="primary" @click="submit">发送</el-button>
            </div>
        </footer>
    </div>
</template>
<script>
// import io from 'socket.io-client'
// import func from '../../vue-temp/vue-editor-bridge'

export default {
  data () {
    return {
      input: '',
      // notes: [1,1,1,11,1,1,1,1,1,1,11,1,1,1,1,1],
      notes: [],
      i: 0
    }
  },
  created () {
    this.sockets.subscribe('newMsg', function (arr) {
      this.notes.push(arr)
    })
  },
  methods: {
    handleScroll (el) {
      console.log(el.target.scrollTop, window.clientHeight, window.scrollHeight)
    },
    back () {
      this.$router.push('/home')
    },
    submit () {
      let value = this.$refs.input.value
      if (!value.trim()) return
      this.input = ''
      let name = new Date().toLocaleString() + ' ' + this.$store.state.user
      let arr = []
      let url = '../assets/logo.png'
      arr.push(name, url, value, ++this.i)
      this.notes.push(arr)
      this.$socket.emit('postMsg', arr)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 101;
    box-sizing: border-box;
    font-size: 50px;
    width: 100vw;
    color: white;
    background: #2196f3;
    line-height: 130px;
    height: 130px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    span:first-child {
        font-weight: 700;
    }
}
.trapper {
  position: fixed;
  display: flex;
  overflow: auto;
  flex-direction: column-reverse;
  overflow: auto;
  // height: 100%;
  background:rgba(0, 0, 0, 0.04);
  top: 130px;
  bottom: 200px;
  .content {
    // display: flex;
    position: relative;
    padding-left: 40px;
    // bottom: 200px;
    // background: rgba(61, 57, 57, 0.07);
    width: 100vw;
    .name {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.67);
      display: inline-block;
    }
    .item {
      display: flex;
      margin: 15px 0;
      .avatar {
        width: 80px;
        height: 80px;
        margin-right: 45px;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .dialog {
      position: relative;
      padding:  18px;
      word-break: break-all;
      // margin: 20px;
      margin-right: 80px;
      border-radius: 20px;
      display: inline-block;
      background: white;
      .value {
        color: rgba(0, 0, 0, 0.87);
      }
    }
    .dialog::after {
      position: absolute;
      border-top: 35px solid #fff;
      border-left: 35px solid transparent;
      left: -35px;
      top: 20px;
      width: 0;
      height: 0;
      content: '';
    }
  }
}
}
.foot {
    position: fixed;
    box-sizing: border-box;
    width: 100vw;
    height: 200px;
    // background: #f7f6fb;
    background:rgba(0, 0, 0, 0.07);
    bottom: 0;
    border: 1px solid #ddd;
    .icon {
        padding-left: 15px;
        span {
            padding-right: 10px;
            font-weight: 700;
            color: rgba(0,0,0,.5);
        }
    }
    .main {
        display: flex;
        height: 100%;
        padding-left: 15px;
        .el-button {
            margin: 0 15px;
            font-size: 40px;
            height: 80px;
            width: 160px;
        }
        input {
            height: 80px;
            width: 100%;
        }
    }
}
</style>
