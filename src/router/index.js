import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActiveNodes from '../views/ActiveNodes.vue'
import NodeView from '../views/NodeView.vue'
import accountRoutes from './account.routes';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/account'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/active-nodes',
      name:'activeNodes',
      component:ActiveNodes
    },
    {
      path:'/node/:node_id',
      name:'node',
      component:NodeView
    },
    { ...accountRoutes }
  ]
})

export default router
