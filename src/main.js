import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
