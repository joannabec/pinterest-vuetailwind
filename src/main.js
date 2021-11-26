import { createApp } from 'vue';
import App from './App.vue';

import BaseBtntext from './components/ui/BaseBtntext';
import BaseBtnimg from './components/ui/BaseBtnimg';
import BaseCard from './components/ui/BaseCard'

const app = createApp(App);
app.component('base-btntext', BaseBtntext);
app.component('base-btnimg', BaseBtnimg);
app.component('base-card', BaseCard);

app.mount('#app');
