import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore} from '@/stores';
import HomeView from '../views/HomeView.vue'
import ActiveNodes from '../views/ActiveNodes.vue'
import NodeView from '../views/NodeView.vue'
import accountRoutes from './account.routes';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/active-nodes'
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



router.beforeEach(async (to) => {
 
  const publicPages = ['/account/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
      authStore.returnURL= to.fullPath;
      return '/account/login';
  }
});

export default router
