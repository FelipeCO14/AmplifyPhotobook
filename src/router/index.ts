import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import SignUpPage from '../views/SignUpPage.vue';
import AlbumsPage from '../views/AlbumsPage.vue';
import AlbumDetailPage from '../views/AlbumDetailPage.vue';
import { Auth } from 'aws-amplify';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: SignUpPage,
  },

  {
    path: '/album/:id',
    name: 'AlbumDetailPage',
    component: AlbumDetailPage,
  },

  {
    path: '/albums',
    name: 'AlbumsPage',
    component: AlbumsPage,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
