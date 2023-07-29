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
        <li>Logout</li>
      </ul>
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
  padding: 4px 8px;
  background-color: rgb(0, 229, 160);
  left:-45%;
}

.profile-container:hover .profile-menu {
  display: block;
}
</style>
