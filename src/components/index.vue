<template>
  <div id="index">
    <el-container>
			<el-aside width="152px">
					<el-menu
						:default-active="defaultActive"
						class="el-menu-vertical"
						router
						unique-opened
						:collapse="iscollapse"
						:collapse-transition="false"
						active-text-color='#29A88D'
						background-color="#272D34"
						text-color="#fff"
						@open="handleOpen"
						@close="handleClose">
								<div id="logo" index="/index">
									<img src="../assets/img/logo.png" alt="菜头网络科技有限公司" class="logo"> CAITOUXIA
								</div>

					      <el-menu-item index="/index/home">
					          <i class="icon iconfont icon-home"></i>
					          <span slot="title">总览</span>
					      </el-menu-item>

								<el-menu-item index="/index/plate">
					          <i class="icon iconfont icon-iconsp1"></i>
					          <span slot="title">版块管理</span>
					      </el-menu-item>

					      <el-submenu index="/index/activity">
					        <template slot="title">
					          <i class="icon iconfont icon-shangpinshengou"></i>
					          <span>活动管理</span>
					        </template>
									<el-menu-item index="/index/activity">
											<i class="icon iconfont">*</i>
											<span>活动管理</span>
									</el-menu-item>
									<el-menu-item index="/index/classify">
											<i class="icon iconfont">*</i>
											<span>分类管理</span>
									</el-menu-item>
					      </el-submenu>

                <el-submenu index="/index/goods">
					        <template slot="title">
					          <i class="icon iconfont icon-shangpinliebiao"></i>
					          <span>商品管理</span>
					        </template>
									<el-menu-item index="/index/goods">
											<i class="icon iconfont">*</i>
											<span>商品管理</span>
									</el-menu-item>
									<el-menu-item index="/index/sort">
											<i class="icon iconfont">*</i>
											<span>分类管理</span>
									</el-menu-item>
									<el-menu-item index="/index/freight">
											<i class="icon iconfont">*</i>
											<span>运费管理</span>
									</el-menu-item>
					      </el-submenu>

					      <el-menu-item index="/index/users">
					          <i class="icon iconfont icon-huiyuan"></i>
					          <span slot="title">用户管理</span>
					      </el-menu-item>

                <el-submenu index="/index/orders">
					        <template slot="title">
					          <i class="icon iconfont icon-single"></i>
					          <span>订单管理</span>
					        </template>
									<el-menu-item index="/index/orders">
											<i class="icon iconfont">*</i>
											<span>订单管理</span>
									</el-menu-item>
									<el-menu-item index="/index/orderset">
											<i class="icon iconfont">*</i>
											<span>订单设置</span>
									</el-menu-item>
									<el-menu-item index="/index/activityorder">
											<i class="icon iconfont">*</i>
											<span>活动订单</span>
									</el-menu-item>
					      </el-submenu>

					      <el-submenu index="/index/source">
					        <template slot="title">
					          <i class="icon iconfont icon-sitting"></i>
					          <span>系统管理</span>
					        </template>
									<el-menu-item index="/index/material">
											<i class="icon iconfont">*</i>
											<span>素材管理</span>
									</el-menu-item>
									<el-menu-item index="/index/customservice">
											<i class="icon iconfont">*</i>
											<span>客服设置</span>
									</el-menu-item>
									<el-menu-item index="/index/miniprograms">
											<i class="icon iconfont">*</i>
											<span>小程序信息</span>
									</el-menu-item>
					      </el-submenu>

					      <el-menu-item index="/index/qrcode">
					          <i class="icon iconfont icon-code"></i>
					          <span slot="title">二维码</span>
					      </el-menu-item>

					      <el-menu-item index="/index/homeset">
					          <i class="icon iconfont icon-xitong"></i>
					          <span slot="title">首页设置</span>
					      </el-menu-item>

								<el-submenu index="/index/community">
					        <template slot="title">
					          <i class="icon iconfont icon-xiaoxizhongxin"></i>
					          <span>社区管理</span>
					        </template>
									<el-menu-item index="/index/sectionmanage">
											<i class="icon iconfont">*</i>
											<span>版块管理</span>
									</el-menu-item>
									<el-menu-item index="/index/topicmanage">
											<i class="icon iconfont">*</i>
											<span>话题管理</span>
									</el-menu-item>
					      </el-submenu>

					</el-menu>
					<div class="iscollapse" @click="setcollapse">
						<i class="el-icon-arrow-right" v-if="iscollapse"></i>
						<i class="el-icon-arrow-left" v-else></i>
					</div>
			</el-aside>
			<el-container>
				<el-header class="header">
						<ul>
								<li class="messages">
										<i class="icon iconfont icon-notification"></i>
								</li>
								<li class="lines"> | </li>
								<li class="help">
										<span>帮助</span>
								</li>
								<li class="lines"> | </li>
								<li class="operate">
										<div class="user" >
											<img src="../assets/img/logo.jpg" alt="">
											<span> 张三</span>
											<i class="icon iconfont icon-unfold"></i>
										</div>
										<div class="prove">
											<p><i class="icon iconfont icon-person2"></i>个人中心</p>
											<p><i class="icon iconfont icon-sitting"></i>设置</p>
											<p @click="quit"><i class="icon iconfont icon-cuowu"></i>退出</p>
										</div>
								</li>
						</ul>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
				<div class="foot">
					<span>版权所有© 浙江菜头网络科技有限公司 浙ICP备11011739号 地址：杭州市下沙下沙经济开发区1号大街68号华媒科创园</span>
					<span>邮编：310018  技术支持：400085897</span>
				</div>
			</el-container>
		</el-container>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "index",
  data() {
    return {
      defaultActive: "/index/home",
      iscollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    setcollapse() {
      this.iscollapse = !this.iscollapse;
      if (this.iscollapse) {
        $("#logo").css("width", "64px");
        $(".el-aside").css("width", "auto");
      } else {
        $("#logo").css("width", "auto");
        $(".el-aside").css("width", "152px");
      }
    },
    quit() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          var that = this;
          var url = this.$api.loginout;
          this.$http
            .post(url)
            .then(res => {
              console.log(res.data);
              let data = res.data;
              if (data.code == 200) {
                this.$message.success("退出成功");
                this.$router.push("/login");
                localStorage.removeItem("userMsg");
              } else {
                this.$message.error(data.msg);
              }
            })
            .catch(error => {
              this.$message.error("error");
            });
        })
        .catch(e => {});
    }
  },
  mounted() {
    // console.log(this.$api);
    // var operate = document.querySelector(".operate");
    // operate.onmousehover = function() {
    //   this.style.display = "block";
    // };
    $(".operate").hover(
      function() {
        $(".operate .prove").css("display", "block");
      },
      function() {
        $(".operate .prove").css("display", "none");
      }
    );
  }
};
</script>

<style scoped>
/* 侧边栏 */
.el-aside {
  background: #272d34;
  min-height: 100vh;
}
.el-menu-vertical {
  border-right: 0;
}
.el-submenu .el-menu-item {
  min-width: 150px;
}
.el-menu-vertical i {
  color: #fff !important;
  font-size: 14px !important;
}
.is-active {
  background: #1890ff !important;
  color: #fff !important;
}
#logo {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: #272d34;
  color: #fff;
  overflow: hidden;
}
.logo {
  width: 22px;
  display: block;
  margin: 0 10px 0 20px;
}
.iscollapse {
  background: #283644;
  color: #fff;
  width: 100%;
  height: 50px;
  padding-top: 8px;
  text-align: center;
}
.el-aside .iscollapse i {
  font-size: 40px !important;
}
/* .tac::-webkit-scrollbar {
  display: none;
} */

/* 右边头部 */
.el-header {
  height: 50px !important;
  background: #fff !important;
  padding: 0 !important;
  line-height: 50px;
}
.header ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #e5e6e7;
}
.header li {
  padding: 0 8px;
  cursor: pointer;
  position: relative;
}
.header .lines {
  font-weight: 900;
  color: #dfdfdf;
}
.header .help span {
  color: #2477e7;
}
.header .operate {
  height: 50px;
  padding-right: 20px;
}
.header .prove {
  display: none;
  width: 100px;
  position: absolute;
  top: 50px;
  right: 0px;
  left: 0;
  padding: 5px 0px;
  margin: auto;
  background: #fff;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 0 3px 0 #ccc;
}
.header .prove p {
  line-height: 30px;
  padding: 0px 10px;
}
.header .prove p:hover {
  background: rgba(24, 144, 255, 0.1);
}
.header i {
  color: #2477e7;
}
.header .user i {
  margin-left: 10px;
}
.header .prove i {
  color: #999;
  margin-right: 5px;
}
.header .user {
  display: flex;
  align-items: center;
}
.header span {
  color: #666;
  font-size: 12px;
}
.header img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

/* 右边主体部分 */
.el-main {
  padding: 0 !important;
}
/* 右边底部 */
.foot {
  text-align: center;
  font-size: 12px;
  padding-top: 20px;
  height: 60px !important;
  color: #999;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.foot span {
  line-height: 22px;
  transform: scale(0.83);
}
</style>
