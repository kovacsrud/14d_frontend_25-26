import { createRouter,createWebHistory } from "vue-router";
import Main from  "../components/Main.vue";
import Posts from "../components/Posts.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component:Main
        },
        {
            path:'/posts',
            name:'posts',
            component:Posts
        }
    ]

});

export default router;