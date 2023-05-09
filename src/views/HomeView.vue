<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-layout>

    <v-app-bar class="pl-2" color="primary" prominent>

      <RouterLink to="/">
        <v-avatar>
          <v-img src="/src/assets/sensors_logo.png" alt="sensors.africa logo"></v-img>
        </v-avatar>
      </RouterLink>


      <v-toolbar-title>sensors.AFRICA staff dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-gmail"></v-btn>

      <v-btn variant="text" icon="mdi-bell"></v-btn>
      <v-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
      </v-avatar>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail
    color="teal-accent-1"
    name="dashboard-menu"
    
    >


      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard"></v-list-item>
        <v-divider />
        <v-list-item prepend-icon="mdi-map-search-outline" title="Sensors map" value=""></v-list-item>
        <v-list-item prepend-icon="mdi-account-hard-hat" title="Field Work" value=""></v-list-item>
        <v-list-item prepend-icon="mdi-truck-delivery" title="Logistics Work" value=""></v-list-item>


      </v-list>
    </v-navigation-drawer>


  </v-layout>
  <main>
 
  </main>
</template>
