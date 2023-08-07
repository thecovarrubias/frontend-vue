import { createWebHistory, createRouter } from 'vue-router'

import Products from './components/Products/Products.vue'
import ProductsList from './components/Products/ProductsList.vue'

const routes = [
    {
        path: '/',
        name: 'Products',
        component: Products,
    },
    {
        path: '/ProductsList',
        name: 'ProductsList',
        component: ProductsList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;