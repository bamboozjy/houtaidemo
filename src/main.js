// 用“导入”命令加载VUE构建版本
//（运行时单独或独立）已在WebPACK.Base.CONF中设置了别名。
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css"; //elementui的样式
import App from "./App";
import router from "./router"; //导入router文件夹下的index.js
import "./reset.css"; //重置样式
import "./iconfont/iconfont.css"; //字体图标

//把Api变成vue下全局的变量，使用this.$api调用接口数据
import Api from "./api.js";
Vue.prototype.$api = Api;

//封装好的有拦截器的axios：使用this.$http代替封装好的axios
import packedAxios from "./store/axios";
Vue.use(packedAxios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
