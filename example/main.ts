import { createApp } from 'vue';
import { TpButton } from '../packages';
import '../lib/style.css';

import App from './App.vue';
// import  TpButton from '../lib/button';
// import('../lib').then(res => console.log(res.c))

const app = createApp(App);

// app.use(TpButton)
app.mount('#app');
