import Vue from 'vue'
import VueRouter from 'vue-router'
import Embed from 'v-video-embed'

Vue.use(VueRouter)
Vue.use(Embed);

const routes = [
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0, behavior: 'smooth',}
  },
})

export default router;
