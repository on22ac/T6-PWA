/**
 * @author Thi Tuong Vy Nguyen <thi.nguyen.22@lehre.mosbach.dhbw.de>
 */
import { createRouter, createWebHistory} from "vue-router";
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'


// const router = createRouter({
//     history: createWebHistory(),
//     routes:[
//     { path: "/", component: () => import("../views/Home.vue") },
//     { path: "/register", component: () => import("../views/Register.vue")},
//     { path: "/sign-in", component: () => import("../views/SignIn.vue") },
//     { path: "/feed", component: () => import("../views/Feed.vue") },
// ],
// });
//     export default router;



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