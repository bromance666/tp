import { createApp } from 'vue';
import App from './App.vue';
import { TpButtonTest, TpButton } from '../lib';
import '../lib/style/button.css';
import router from './router/index';
const app = createApp(App);

app.use(router);
app.use(TpButtonTest);
app.use(TpButton);
app.mount('#app');
