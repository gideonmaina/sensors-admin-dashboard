<script setup>
import { RouterLink, RouterView } from "vue-router";
import MenuBar from "../components/Navigators/Header/MenuBar.vue";
</script>

<template>
  <v-app>
    <MenuBar />
    <!-- side navbar -->
    <v-navigation-drawer
      color="#111827"
      name="dashboard-menu"
      class="text-white"
    >
      <v-list density="default" class="flex-column">
        <div class="subgroup">
          <v-list-item
            prepend-icon="mdi-view-dashboard-outline"
            title="Dashboard"
            value="dashboard"
            to="/"
            class="mt-8"
            :exact="true"
          >
          </v-list-item>
          <div class="subgroup-items">
            <v-list-item
              title="Active Nodes"
              value="activenodes"
              to="active-nodes"
              :exact="true"
              rounded
            ></v-list-item>
            <v-list-item
              title="Inactive Nodes"
              value="inactivenodes"
              to="inactive-nodes"
              :exact="true"
              rounded
            ></v-list-item>
          </div>
        </div>

        <v-divider />
        <v-list-item
          prepend-icon="mdi-map-search-outline"
          title="Sensors map"
          value="sensorsmap"
          to="/map"
          :exact="true"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-hard-hat"
          title="Field Work"
          value="fieldwork"
          to="/map"
          :exact="true"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-truck-delivery"
          title="Logistics Work"
          value="logistics"
          :exact="true"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- /side-navbar -->

    <v-main class="flex flex-col my-2 bg-#f2f4f4">
      <div class="grow ml-4 px-4 py-4">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.subgroup {
  display: flex;
  flex-direction: column;
}
.subgroup-items {
  align-self: center;
}
</style>
