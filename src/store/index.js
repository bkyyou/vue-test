// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      console.log('getCount', state);
      let { count } = state;
      console.log('count', count);
      return ++count;
    }
  },
  mutations: {
    addCount(state, num) {
      state.count = state.count + num
    }
  }
});

export default store;


