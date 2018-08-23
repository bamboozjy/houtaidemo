import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    token: null,
    shop_code: null
  },
  mutations: {
    set_token(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    del_token(state) {
      state.token = "";
      localStorage.removeItem("token");
    },

    orderCheckNum(state, d) {
      state.shop_code = d.shop_code;
    }
  }
});
Vue.prototype.$store = store;
export default store;
