<script setup>
import { RouterLink, RouterView } from "vue-router";
import MenuBar from "../components/Navigators/Header/MenuBar.vue";
import SideNav from "../components/Navigators/SideNav.vue";
</script>

<template>
  <v-app>
    <MenuBar />
    <!-- side navbar -->
    <SideNav />
    <!-- /side-navbar -->

    <v-main class="flex flex-col my-2 bg-#f2f4f4">
      <div class="grow ml-4 px-4 py-4">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
