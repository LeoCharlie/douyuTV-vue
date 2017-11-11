import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Sort from '../components/Sort.vue'
import Recomm from '../components/Recomm.vue'
import Personal from '../components/Personal.vue'
import RoomList from '../components/sort/RoomList.vue'

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/sort', component: Sort },
    { path: '/recommend', component: Recomm },
    { path: '/personal', component: Personal },
    { path: '/games/:cateid/:gamename', component: RoomList }
  ]
})
