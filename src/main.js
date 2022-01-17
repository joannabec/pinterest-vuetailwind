import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import './assets/tailwind.css';

import cardsModule from './store/index.js';

import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard'

const app = createApp(App);
const store = createStore(cardsModule);

app.use(store);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
