<script setup >
import { ref } from "vue";
// import axios from "axios";
//import sensors from "../simulationdata/activenodes.json" assert {type:'json'}
import { useRouter } from "vue-router"
import Loaders from "../components/Loaders.vue"

const router = useRouter()
let nodes = ref(null);
let items = ref([]);
const loading = ref(true)
const sensors = [
  {
    "node_id": "esp8266-104",
    "node_location": "TUK",
    "node_city": "Nairobi",
    "node_country": "Kenya",
    "node_sensors": [139, 28, 14]

  },

  {
    "node_id": "esp8266-133",
    "node_location": "CARSS-NARSDA",
    "node_city": "Abuja",
    "node_country": "Nigeria",
    "node_sensors": [154, 64, 85]

  },

  {
    "node_id": "58245",
    "node_location": "Lake-Hub",
    "node_city": "Kisumu",
    "node_country": "Kenya",
    "node_sensors": [141, 33, 45]

  },

  {
    "node_id": "esp8266-8592",
    "node_location": "August 7th Memorial",
    "node_city": "Nairobi",
    "node_country": "Kenya",
    "node_sensors": [48, 156, 349]

  },

  {
    "node_id": "esp8266-104",
    "node_location": "Danfoe",
    "node_city": "Abuja",
    "node_country": "Nigeria",
    "node_sensors": [37, 85, 47]

  },
  
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 56, 46,92]

  },

  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [56, 46]

  },
  {
    "node_id": "esp8266-345",
    "node_location": "Jinja",
    "node_city": "Jinja",
    "node_country": "Uganda",
    "node_sensors": [37, 46]

  },



]

// const lastActiveNodes = "http://api.sensors.africa/v1/now/";
// const data = [];
// axios
//   .get(lastActiveNodes)
//   .then((response) => {
//     // nodes.value = response.data;
//     nodes.value = response.data.map((dataObj) => [
//       {
//         sensor_id: dataObj.sensor.id,
//         sensor_name: dataObj.sensor.sensor_type.name,
//       },
//     ]);

//     for (let i = 0; i < nodes.value.length; i++) {
//       data.push(nodes.value[i][0]);
//     }
//     //console.log(response.data)
//   //  console.log(data);

//     items.value = data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });



setTimeout(() => {
  items.value = sensors
  loading.value = false
}, 1000)
const headers = [
  { text: "Node ID", value: "node_id" },
  { text: "Location", value: "node_location" },
  { text: "City", value: "node_city" },
  { text: "Country", value: "node_country" },
  { text: "Sensors", value: "node_sensors" }

];

// const showRow = (item) => {
//   // document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
//   router.push(`/node/${item.node_id}`)
// };

const viewNode = node_id => router.push(`/node/${node_id}`)


</script>

<template>
  <div>
    <h1>View active nodes in last 5 minutes : {{ items.length }}</h1>
    <EasyDataTable :headers="headers" :items="items" buttons-pagination alternating border-cell theme-color="#00e5a0"
      table-class-name="custom-table" :loading="loading">
      <template #loading>
        <Loaders />
      </template>

      <template #item-node_id="{ node_id }">
        <span @click="viewNode(node_id)" class="node-id">{{ node_id }} </span>
      </template>

      <template #item-node_sensors="{ node_sensors }">
        <span v-for="sensor in node_sensors" :v-key="node" class="sensor-tag">{{ sensor }}</span>
      </template>

    </EasyDataTable>



    <div id="row-clicked"></div>

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
</style>