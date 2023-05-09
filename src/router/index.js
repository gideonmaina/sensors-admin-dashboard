import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore} from '@/stores';
import HomeView from '../views/HomeView.vue'
import ActiveNodes from '../views/ActiveNodes.vue'
import InactiveNodes from '../views/InactiveNodes.vue'
import NodeView from '../views/NodeView.vue'
import accountRoutes from './account.routes';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:HomeView
      // path: '/',
      // redirect: '/active-nodes'
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
      path:'/inactive-nodes',
      name:'inactiveNodes',
      component:InactiveNodes
    },
    {
      path:'/node/:node_id',
      name:'node',
      component:NodeView
    },
    { ...accountRoutes },
    // { path: '/:pathMatch(.*)*', redirect: '/' } //redirect to rootpage if path does not match any
  ]
})



router.beforeEach(async (to) => {
 
  const publicPages = ['/account/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  console.log(`Path: ${to.fullPath}`)
  console.log(`auth required: ${authRequired}`)
  authStore.user?console.log(`user: ${authStore.user}`):console.log(false)
  


  if (authRequired && !authStore.user) {
      console.log("Login Required")
      authStore.returnURL= to.fullPath;
      return '/account/login';
  }
  
});

export default router
