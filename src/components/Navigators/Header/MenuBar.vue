<script setup>
import ProfileMenu from "./ProfileMenu.vue";
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
      <!-- Mail notification -->
      <v-btn variant="text" stacked>
        <v-badge content="3" color="error">
          <v-icon>mdi-gmail</v-icon>
        </v-badge>
      </v-btn>

      <!-- general notification -->
      <v-btn variant="text" stacked>
        <v-badge dot color="error">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <ProfileMenu />
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </div>
  </v-app-bar>
</template>
