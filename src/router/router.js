/**
 * @author Thi Tuong Vy Nguyen <thi.nguyen.22@lehre.mosbach.dhbw.de>
 */

import { createRouter, createWebHistory} from "vue-router";
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'SignIn',
            path: '/',
            component: SignIn
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        {
            name: 'Home',
            path: '/home',
            component: Home
        },
        
    ]
    
})

export default router