import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router) // This installs the router into the Vue application. The router needs to be installed before the application is mounted.
    .mount('#app')