import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
