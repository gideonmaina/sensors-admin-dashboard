import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import './assets/main.css'
import './index.css' //tailwind css
// Vuetify
import 'vuetify/styles'
import vuetify from '@/plugins/vuetify.js'

const pinia=createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')

