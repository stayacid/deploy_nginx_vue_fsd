import { createApp } from 'vue'
import { router } from '../providers'
import App from './App.vue';

export const app = createApp(App).use(router);