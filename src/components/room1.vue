<template>
    <div>
        <header class="header">
            <span @click="back">&lt;</span>
            <span>聊天</span>
            <span class="iconfont icon-nickname"></span>
        </header>
        <footer class="foot">
            <div class="icon">
                <span class="iconfont icon-camera"></span>
                <span class="iconfont icon-face"></span>
            </div>
            <div class="main">
                <el-input></el-input>
                <el-button type="primary">发送</el-button>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
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
.foot {
    position: fixed;
    box-sizing: border-box;
    width: 100vw;
    height: 200px;
    background: #f7f6fb;
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
        input: {
            height: 80px;
        }
        .el-button {
            margin: 0 15px;
            height: 80px;
            width: 160px;
        }
        .el-input {
            input {
                height: 80px;
            }
        }
    }
}
</style>
