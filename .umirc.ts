import { defineConfig } from 'umi';

export default defineConfig({
  // locale: { antd: true },
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' }
      ]
    },
    { path: '/products', component: '@/pages/products' }
  ],
});
