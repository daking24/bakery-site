import { createApp } from 'vue'
import App from './App.vue'

// STYLES
import '@/styles/style.css'

// ROUTER
import router from '@/router';

createApp(App).use(router).mount('#app')
