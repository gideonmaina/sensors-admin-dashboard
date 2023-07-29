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
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
</template>

<style >
.profile-container {
  position: relative;
  /* width: inherit;
  height: inherit; */
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
  /* width: inherit;
  height: inherit; */
  display: none;
  background-color: green;
}
.profile-container:hover .profile-menu {
  display: block;
}
</style>
