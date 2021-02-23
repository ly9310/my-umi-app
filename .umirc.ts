import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  exportStatic: {
    // extraRoutePaths: async () => {
    //   // const result = await request('https://your-api/news/list');
    //   return Promise.resolve(['/table']);
    // },
  },
  ssr: {
    devServerRender: true,
  },
});
