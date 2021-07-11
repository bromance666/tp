import { createApp } from 'vue';
import App from './App.vue';
import { TpButton } from '../lib';
import '../lib/style/button.css';

import { TpSwitch } from './switch';

const app = createApp(App);

app.use(TpButton);
app.use(TpSwitch);
app.mount('#app');
