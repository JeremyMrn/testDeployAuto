import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "@/store";
var VueCookie = require('vue-cookie');

Vue.config.productionTip = false
Vue.use(VueCookie);


/** Vue Filters Start */
// look = https://stackoverflow.com/questions/35070271/vue-js-components-how-to-truncate-the-text-in-the-slot-element-in-a-component
Vue.filter('truncate', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});

new Vue({
  el: '#app',
  store: store,
  router,
  vuetify,
  render: h => h(App),
  data: () => ({
  }),

  created(){
  },

  computed: {
  },
  methods: {


  }
}).$mount('#app')
