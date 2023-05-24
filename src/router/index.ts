import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContentCreation from '../components/ContentCreation.vue';
import ContentEdit from '../components/ContentEdit.vue';
import SanctuaryItem from '../components/SanctuaryItem.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/create',
            name: 'create',
            component: ContentCreation
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: ContentEdit,
            props: true
        },
        {
            path: '/:id',
            name: 'sanctuary',
            component: SanctuaryItem,
            props: true
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]
});

export default router;
