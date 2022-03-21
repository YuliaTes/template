import { createRouter, createWebHistory } from "vue-router";

import vAuthorization from '../components/v-authorization.vue'
import vProfile from '../components/v-profile.vue'

const routes =  [
    {
        path:'', name: 'authorization', component: vAuthorization
    },
    {
        path:'/user', name: 'user', component: vProfile
    }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;