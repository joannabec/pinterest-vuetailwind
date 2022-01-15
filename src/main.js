import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard'

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
