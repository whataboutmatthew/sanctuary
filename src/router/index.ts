import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Markdown from '../views/Markdown.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/markdown',
            name: 'markdown',
            component: () => import('../views/Markdown.vue')
        }
    ]
});

export default router;
