import { Layout, Login } from '@/views/account';

export default {
    path: '/account',
    component: Layout,
    children: [
        { path: '', redirect: '/login' },
        { path: '/login', component: Login },
    ]
};