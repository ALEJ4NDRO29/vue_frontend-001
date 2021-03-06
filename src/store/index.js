import Vue from 'vue';
import Vuex from 'vuex';

import hotel from './hotels.module';
import auth from './auth.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    hotel,
    auth
  }
});

export default store;