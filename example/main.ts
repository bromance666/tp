import { createApp } from 'vue';
import { TpButton } from '../lib/';
import '../lib/style.css';

import App from './App.vue';
const app = createApp(App);
app.use(TpButton);
app.mount('#app');
