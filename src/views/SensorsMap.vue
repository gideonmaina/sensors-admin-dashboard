
<template>
    <h1>Map view</h1>
    <div id="sensorsMapNetwork" class="w-full h-full">
        
    </div>
    </template>



<script setup>
    import { onMounted } from "vue";
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    const region={
        "name":"Nairobi",
        "lat":-1.3024146,
        "long":36.7770724
    }
    const mapContainer="sensorsMapNetwork"
    const setMap=()=>{
       const map= L.map(mapContainer).setView([region.lat,region.long],2.5)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
    onMounted(()=>{
setMap()
    })
    </script>
