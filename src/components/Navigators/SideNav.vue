<template>
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