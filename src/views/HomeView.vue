<script setup>
import TheWelcome from '../components/TheWelcome.vue'
// import {RouterLink,RouterView} from 'router'

</script>

<template>

  <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
        
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard"></v-list-item>
            <v-divider/>
            <v-list-item prepend-icon="mdi-map-search-outline" title="Sensors map" value=""></v-list-item>
            <v-list-item prepend-icon="mdi-account-hard-hat" title="Field Work" value=""></v-list-item>
            <v-list-item prepend-icon="mdi-truck-delivery" title="Logistics Work" value=""></v-list-item>
            
            
          </v-list>
        </v-navigation-drawer>
  
   
      </v-layout>
  <main>
    <TheWelcome />
  </main>
</template>
