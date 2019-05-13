// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import materializeCss from './css/materialize.min.css'
import materializeJs from './js/materialize.min.js'

Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
