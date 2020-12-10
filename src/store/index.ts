import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth/auth';
import { albumInfo } from './albums/albums';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    albumInfo,
  },
});
