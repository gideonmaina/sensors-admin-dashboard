<script setup>
import ProfileMenu from './ProfileMenu.vue'
</script>

<template>
  <v-app-bar class="pl-2 overflow-visible" color="#00e5a0" prominent>
    <RouterLink to="/">
      <v-avatar>
        <v-img
          src="/src/assets/sensors_logo.png"
          alt="sensors.africa logo"
        ></v-img>
      </v-avatar>
    </RouterLink>

    <v-toolbar-title>sensors.AFRICA staff dashboard</v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="text-light-blue-lighten-5">
      <v-btn
        variant="text"
        icon="mdi-gmail"
        class="text-light-blue-lighten-5"
      ></v-btn>
      <v-btn variant="text" icon="mdi-bell"></v-btn>
      <!-- <v-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar> -->
      <ProfileMenu/>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </div>
  </v-app-bar>
</template>
