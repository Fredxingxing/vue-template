import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import {Quasar} from "quasar";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'
import routes from './routes/index'

const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes,
})
const app  = createApp(App)
app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.mount('#app')
