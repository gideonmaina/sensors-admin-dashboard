import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import './assets/main.css'
import './index.css' //tailwind css
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
app.use(router)


const vuetify = createVuetify({
    components,
    directives,
  })

app.use(vuetify)

app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
