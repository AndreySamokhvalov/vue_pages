import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import BlogDetPage from '@/pages/BlogDetPage.vue';
Vue.use(Router);
 
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/homepage',
            name: 'homepage',
            component: HomePage,

        },
        {
            path: '/projectpage',
            name: 'projectpage',
            component: ProjectPage,

        },
        {
            path: '/blogpage',
            name: 'blogpage',
            component: BlogPage,

        },
        {
            path: '/blogdetailspage',
            name: 'blogdetailspage',
            component: BlogDetPage,

        },
        {
            path: '/projectdetailspage',
            name: 'projectdetailspage',
            component: ProjectDetailsPage,

        },
    ]
})