<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>

    <v-app-bar class="pl-2" color="#00e5a0" prominent>

      <RouterLink to="/">
        <v-avatar>
          <v-img src="/src/assets/sensors_logo.png" alt="sensors.africa logo"></v-img>
        </v-avatar>
      </RouterLink>


      <v-toolbar-title>sensors.AFRICA staff dashboard</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="text-light-blue-lighten-5">
        <v-btn variant="text" icon="mdi-gmail" class="text-light-blue-lighten-5"></v-btn>
        <v-btn variant="text" icon="mdi-bell"></v-btn>
        <v-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </div>
    </v-app-bar>

  <!-- side navbar -->
    <v-navigation-drawer color="#111827" name="dashboard-menu" class="text-white">


<v-list density="default"  >


  <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard" to="/" class="mt-8"></v-list-item>
  <v-list-group>
    <v-list-item title="Active Nodes" value="" to="/active-nodes"></v-list-item>
    <v-list-item title="Inactive Nodes" value="" to="inactive-nodes"></v-list-item>
  </v-list-group>
  <v-divider />
  <v-list-item prepend-icon="mdi-map-search-outline" title="Sensors map" value="" to="active-nodes"></v-list-item>
  <v-list-item prepend-icon="mdi-account-hard-hat" title="Field Work" value=""></v-list-item>
  <v-list-item prepend-icon="mdi-truck-delivery" title="Logistics Work" value=""></v-list-item>


</v-list>

</v-navigation-drawer>

<!-- /side-navbar -->


      <v-main class="flex flex-col my-2  bg-#f2f4f4">
   
        <div class="grow ml-4 px-4 py-4 ">
        <RouterView  />
      </div>
      </v-main>
    


  </v-app>
</template>

