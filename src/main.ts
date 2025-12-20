import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useFilterStore } from '@/stores/filterStore.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const filterStore = useFilterStore();
filterStore.loadFromLocalStorage()

app.mount('#app')
