<template>
  <div class="wrap">
    <!-- <header class="header">
      <span @click="back">&lt;</span>
      <h3>注册账号</h3>
  </header> -->
  <span class="back" @click="back">&lt;</span>
    <h3>注册账号</h3>
    <div class="form-submit" action="/login">
      <el-input size="medium" v-model="name" placeholder="请输入账号" clearable></el-input>
      <el-input size="medium" v-model="password" type="password" placeholder="请输入密码" clearable></el-input>
      <el-button @click="register"  type="primary" round>Go</el-button>
    </div>
    <h3>忘记密码</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/home')
    },
    register () {
      let that = this
      this.$socket.emit('login', this.name.trim(), this.password.trim())
      this.sockets.subscribe('loginSucess', function () {
        that.$store.commit('login', that.name.trim())
        console.log('loginSucess')
        that.$router.push('/home')
      })
      this.sockets.subscribe('nickExisted', function () {
        alert('用户名已存在或密码错误')
        console.log('loginSucess')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 50px;
  color:black;
}
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
h3 {
  text-align: center;
}
.wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eaeaea;
  z-index: 100;
  font-size: 40px;
  // .form-submit {
  // }
  .form-submit {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // align-items: center;
  }
   /deep/ .el-input{
     width: 70vw;
   }
   /deep/ input {
      width: 70vw;
      height: 80px;
      border-radius: 50px;
      margin: 20px;
      // background: blue;
   }

  /deep/ button {
    // background: blue;
    font-size: 40px;
    width: 30vw;
    margin: 0 40px;
  }

}

</style>
