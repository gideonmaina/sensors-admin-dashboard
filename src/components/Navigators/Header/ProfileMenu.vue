<script setup>
import { useAuthStore } from "@/stores";
import { onMounted } from "vue";

const authStore = useAuthStore()
onMounted(()=>{
  const logout=document.getElementById("logout")
  logout.addEventListener("click",evt=>{
    authStore.logout()
  })
})
</script>
<template>
  <div class="profile-container">
    <div class="profile-image">
      <v-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </div>

    <div class="profile-menu">
      <ul class="list-none" >
        <li>Profile</li>
        <li>Settings</li>
      </ul>
      <button class="mt-2 mb-2" id="logout">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  position: relative;
  cursor: pointer;
  display:inline-block;
  
}

.profile-image{
position: relative;
display: inline-block;
}
.profile-menu {
  position: absolute;
  z-index: 2;
  display: none;
  padding: 4px 10px;
  /* background-color: rgb(0, 229, 160); */
  background-color: white;
  color:black;
  left:-45%;
  margin-top:2px;
  border-radius:4px;
  box-shadow: 6px 12px 15px -3px rgba(0,0,0,0.1);
}

.profile-container:hover .profile-menu {
  display: block;
}
ul{
  margin-top:3px;
  padding-left: 0;
}

ul li{
  margin-bottom:2px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.profile-menu::after{
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

button{
  outline:1px solid #00e5a0;
  padding:1px 4px;
  border-radius:2px;
}
button:hover{
  background-color:#00e5a0 ;
  color:white;
}

</style>
