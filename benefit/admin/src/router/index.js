import Vue from 'vue'
import Router from 'vue-router'
import Index from '../containers/Index.vue'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import UserInfo from '../views/users/UserInfo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'users',
                    name: 'Users',
                    component: Users
                },
                {
                    path: 'users/info/:email',
                    name: 'UserInfo',
                    component: UserInfo
                }
            ]
        }
    ]
})
