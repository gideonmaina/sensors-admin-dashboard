<script setup>
import { ref } from "vue";
// import inactiveSensors from "../simulationdata/inactivenodes.json";
import { useRouter } from "vue-router";
import Loaders from "../components/Loaders.vue";
import { useNodesStore } from "@/stores/sensors.store.js";
const nodes = useNodesStore();

const router = useRouter();
const loading = ref(true);
let items = ref([]);
const searchValue = ref("");
setTimeout(() => {
  // items.value = inactiveSensors;
  items.value = nodes.inactive_all;
  loading.value = false;
}, 1000);



const headers = [
  { text: "Node ID", value: "node_id" },
  { text: "Type", value: "node_location" },
  { text: "Last Active", value: "last_active" },
  { text: "Location", value: "node_location" },
  { text: "City", value: "node_city" },
  { text: "Country", value: "node_country", sortable: true },
  { text: "Sensors", value: "node_sensors" },
];

const viewNode = (node_id) => router.push(`/node/${node_id}`);
const viewSensor = (sensor_id) => router.push(`/sensor/${sensor_id}`);
const randomHsl = () =>
  `hsla(${Math.floor(Math.random() * 360)}, 100%, 40%, 1)`;
</script>

<template>
    <div>
      <h1>inactive nodes checked at 1340HRS UTC : {{ items.length }}</h1>
      <div class="searchbox">
        <span>Search node: </span>
        <input type="text" placeholder="e.g. esp8266-12345" v-model="searchValue">
      </div>


      <EasyDataTable :headers="headers" :items="items" buttons-pagination alternating border-cell theme-color="#00e5a0"
      table-class-name="custom-table" :loading="loading" :search-value="searchValue">
      <template #loading>
        <Loaders />
      </template>

      <template #item-node_id="{ node_id }">
        <span @click="viewNode(node_id)" class="node-id">{{ node_id }} </span>
      </template>

      <template #item-node_sensors="{ node_sensors }">
        <span v-for="sensor in node_sensors" :v-key="node" class="sensor-tag" :style="{ backgroundColor: randomHsl() }"
          @click="viewSensor(sensor)">{{ sensor }}</span>
      </template>

    </EasyDataTable>

    </div>
</template>
<style scoped>
.custom-table {
  --easy-table-header-background-color: #00e5a0;
  --easy-table-header-font-color: #fff;
  --easy-table-header-font-size: 18px;
  font-weight: 500;


}

.node-id {
  cursor: pointer;
  color: #370287;
  font-size: large;
}

.sensor-tag {
  background-color: #00e5a0;
  padding: 2px 6px;
  border-radius: 2px;
  color: white;
  margin-right: 4px;
  cursor: pointer;
}

.searchbox{
  margin: 10px;
}
.searchbox input{
  padding: 4px;
  margin-left: 16px;
  outline: none;
}
</style>