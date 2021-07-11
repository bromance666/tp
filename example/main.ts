import { createApp } from 'vue';
import App from './App.vue';
import { TpButtonTest, TpButton } from '../lib';
import '../lib/style/button.css';

const app = createApp(App);
app.use(TpButtonTest);
app.use(TpButton);
app.mount('#app');
