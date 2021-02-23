import {IRoute, Redirect} from 'umi';

const routers: IRoute[] = [
  {
    title: '',
    path: '/',
    component: '@/layouts/index',
    routes: [
      // { name: 'Home', exact: true, path: '/', redirect: './index'},
      { title: 'Home', exact: true, path: '/', component: '@/pages/index' },
      { title: 'Test', exact: true, path: '/test', component: '@/pages/test' },

      { title: 'Index', exact: true, path: '/table', component: '@/pages/table/index' },
      {
        title: 'List',
        exact: true,
        path: '/table/list',
        component: '@/pages/table/list',
        wrappers: [
          '@/wrappers/auth.tsx',
        ],
      },
    ],
  },
]

export default routers;
