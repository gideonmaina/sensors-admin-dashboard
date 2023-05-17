<script setup>
import { ref } from 'vue'
// import { useRoute } from "vue-router";
import NodeDetails from "@/components/SensorViewComponents/NodeDetails.vue"
import MaintenanceLog from "@/components/SensorViewComponents/NodeMaintenanceLog.vue"
import EditNode from "@/components/SensorViewComponents/EditNode.vue"
// const node_id = useRoute().params.node_id;
const tab = ref(null)
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="#00e5a0">
      <v-tab value="info">Node Info</v-tab>
      <v-tab value="maintenance">Maintenance Log</v-tab>
      <v-tab value="edit">Edit</v-tab>
    </v-tabs>

    <div class="mt-2">

      <v-window v-model="tab">
        <v-window-item value="info">
          <NodeDetails />
        </v-window-item>

        <v-window-item value="maintenance">
          <MaintenanceLog />
        </v-window-item>

        <v-window-item value="edit"> <EditNode/> </v-window-item>
      </v-window>

    </div>
  </v-card>
</template>

