<template>
  <div id="login" :style="{backgroundImage:'url('+loginbg+')' }">
    <div class="head">
      <div class="left">
        <div class="box">
          <img src="../assets/img/logo.jpg" alt="浙江菜头网络科技有限公司">
          <span>CAITOUXIA</span>
        </div>
      </div>
      <div class="right">
        <div class="box">
          <h2>菜头侠新零售营销管理系统</h2>
          <el-input placeholder="请输入您的用户名" v-model="username">
            <template slot="prepend"><i class="icon iconfont icon-person2"></i></template>
          </el-input>
          <el-input placeholder="请输入您的密码" v-model="password" type="password">
            <template slot="prepend"><i class="icon iconfont icon-suo"></i></template>
          </el-input>
          <el-button type="primary" native-type='submit' @click="login">登 陆</el-button>                                        
        </div>
      </div>
    </div>
    <div class="foot">
        <div class="wrap">
            <div class="f-top">
                <div class="f-top-l">
                    <div class="f-top-l-t">
                        <span>关于我们</span>
                        <span>招商加盟</span>
                        <span>联系我们</span>
                    </div>
                    <div class="f-top-l-b">
                        <img src="../assets/img/tx.png" alt="">
                        <img src="../assets/img/txy.png" alt="">
                        <img src="../assets/img/zfb.png" alt="">
                        <img src="../assets/img/aly.png" alt="">
                        <img src="../assets/img/wxzf.png" alt="">
                        <img src="../assets/img/wx.png" alt="">
                    </div>
                </div>
                <div class="f-top-r">
                    <div class="f-top-r-con">
                        <div>
                            <p>官方微信</p>
                            <img src="../assets/img/gzh.png" alt="">
                        </div>
                        <div>
                            <p>售前客服</p>
                            <img src="../assets/img/sqkf.png" alt="">
                        </div>
                        <div>
                            <p>售后客服</p>
                            <img src="../assets/img/shkf.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-bot">
                <span>版权所有：浙江菜头网络科技有限公司</span>
                <span>公司地址：浙江省杭州市江干区下沙华媒科创园</span>
                <span>联系电话：400-085-8597</span>
                <span>上班时间：周一至周五 8:30-21:00 </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginbg: require("../assets/img/loginbg.png"),
      username: "xiaobai",
      password: "123456",
      redirect: null //用于token失效重定向到login时，再次登入成功后跳转回原来的页面
    };
  },
  methods: {
    login() {
      var that = this;
      var url = this.$api.login;
      var msg = {
        shop_username: that.username,
        shop_password: that.password
      };
      this.$http
        .post(url, msg)
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data.code == 200) {
            this.$message.success("登录成功");
            if (that.redirect) {
              that.$router.push({
                path: that.redirect
              });
            } else {
              that.$router.push({
                path: "/index",
                query: { data: data.result }
              });
            }
            //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
            // this.$store.commit("set_token", data["Authentication-Token"]);
            localStorage.userMsg = JSON.stringify(data.result);
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("账号或密码错误");
        });
    }
  },
  beforeMount() {
    var redirect = this.$route.query.redirect;
    this.redirect = redirect;
    console.log(redirect);
  },
  mounted() {}
};
</script>

<style scoped>
#login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: 1980px auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.head {
  display: flex;
  justify-content: space-around;
}
.head .left {
  margin-top: 100px;
  width: 340px;
  height: 80px;
  border-radius: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
}
.head .left .box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.head .left .box img {
  width: 80px;
  border-radius: 50%;
}
.head .left .box span {
  font-size: 40px;
  color: #fff;
  font-weight: 900;
}
.head .right {
  margin-top: 200px;
  width: 300px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, 0.3);
  padding: 50px;
}
.head .right .box {
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.head .right h2 {
  font-size: 22px;
  text-align: center;
  color: #333;
}
.head .right .el-input-group__prepend {
  padding: 0 5px !important;
}

.foot {
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
}
.foot .f-top {
  padding: 30px 0 20px;
  display: flex;
  justify-content: space-around;
}
.f-top .f-top-l {
  padding: 0 30px;
}
.f-top .f-top-l span {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border-right: 1px solid #868686;
  font-size: 12px;
  cursor: pointer;
}
.f-top .f-top-l span:nth-of-type(1) {
  padding-left: 5px;
}
.f-top .f-top-l span:nth-last-of-type(1) {
  border: 0;
}
.f-top .f-top-l img {
  height: 15px;
  margin-right: 10px;
}
.f-top-r-con {
  display: flex;
}
.f-top-r-con div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.f-top .f-top-r p {
  font-size: 12px;
  width: 57px;
  text-align: justify;
}
.f-top .f-top-r img {
  height: 57px;
}
.f-bot {
  border-top: 1px solid #868686;
  display: flex;
  justify-content: space-around;
  padding: 10px 100px 20px;
  font-size: 8px;
}
</style>
