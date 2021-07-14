/**
 * vite打包
 *
 **/
import { createApp } from 'vue';
import App from './App.vue';
import components from './index';
import '../dist/styles/index.less';
import router from './router/index';
const app = createApp(App);
app.use(router);
app.use(components);
app.mount('#app');

/**
 * esbuild打包
 */
// import { createApp } from 'vue';
// import App from './App.vue';
// // import { TpButtonTest, TpButton } from '../lib';
// import components from './index';
// import router from './router/index';

// import '../dist/styles/index.less';
// import { createTp } from '../lib/'
// const app = createApp(App);
// app.use(router);
// app.use(components);
// app.use(createTp);
// app.mount('#app');
