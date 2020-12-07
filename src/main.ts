import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsmobile from './aws-exports';

amplify.configure(awsmobile);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
