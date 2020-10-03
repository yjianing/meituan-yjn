import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {
      name: '北京'
    }
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    }
  },
  actions: {
    setPosition({ commit }) {
      // 异步请求获取当前定位
      commit('setPosition', {name: '上海'});
    }
  },
  modules: {
  }
});
