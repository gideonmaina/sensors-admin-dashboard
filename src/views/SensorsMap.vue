<template>
  <h1>Map view</h1>
  <div id="sensorsMapNetwork" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted } from "vue";
// import Marker from '@/components/map-markers/PrimaryMarker.vue'

import { useNodesStore } from "@/stores/sensors.store.js";
const nodes = useNodesStore();

import "leaflet/dist/leaflet.css";
import L from "leaflet";
const region = {
  name: "Nairobi",
  lat: -1.3024146,
  long: 36.7770724,
};
const mapContainer = "sensorsMapNetwork";
const setMap = () => {
  var map = L.map(mapContainer).setView([region.lat, region.long], 8);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  mark_nodes(L, nodes.inactive_nodes_map, map);
  //  L.marker([-1.308009, 36.858899], { icon: activeMarkerIcon }).addTo(map);
};

const mark_nodes = async (Leaflet, nodey, map) => {
 if((nodey.length==0)||(nodey==undefined) ){
  console.log("Inactive Nodes empty")
  await nodes.getInactiveNodes()
 }
  

  const activeMarkerIcon = L.divIcon({
    className: "mapMarkerIco1",
    html: "<span class='radial-map-marker'><span class='inner'></span></span>",
    iconSize: [48, 48],
    iconAnchor: [24,24]
    
  });

  nodey.forEach((node) => {
    const coords = node[2].split(",").map(Number);
    Leaflet.marker(coords,{icon: activeMarkerIcon}).addTo(map).bindPopup(`<p>${node[0]}</p><p>${node[1]}</p>`);
  });
};

onMounted(() => {
  setMap();
});
</script>

<style>
.radial-map-marker {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}

.radial-map-marker::after,
.radial-map-marker::before {
  content: "";
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  animation: ring 1.5s linear infinite;
}

.radial-map-marker::before {
  width: 24px;
  height: 24px;
  border: 4px solid #3be8b0;
  top: 12px;
  left: 12px;
}

.radial-map-marker::after {
  width: 48px;
  height: 48px;
  left: 0;
  top: 0;
  border: 8px solid #0cb67e;
  animation-delay: 0.5s;
}

.radial-map-marker .inner {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #1fa97b;
  left: 16px;
  top: 16px;
  border-radius: 50%;
}

@keyframes ring {
  0% {
    transform: scale(0.4);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
