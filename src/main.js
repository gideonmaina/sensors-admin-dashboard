import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import './assets/main.css'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
const app = createApp(App)
app.use(router)


const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        fa,
        mdi,
      }
    },
  })

app.use(vuetify)

app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
