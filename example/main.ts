import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '../lib/';

createApp(App).use(createUI).mount('#app');
