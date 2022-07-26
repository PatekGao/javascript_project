import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/page1', component: '@/pages/page1'},
        { path: '/page2', component: '@/pages/page2'},
        { path: '/page3', component: '@/pages/page3'},
        { path: '/page4', component: '@/pages/page4'},
      ]
    },
  ],

  fastRefresh: {},
  antd: {},
  dva: {},
});
