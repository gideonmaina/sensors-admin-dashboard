<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>


  <!-- <slot name="icon">
    <v-avatar color="info">
      <v-icon icon="mdi-account-circle"></v-icon>
    </v-avatar>
  </slot> -->

  <slot name="named-avatar">
    <v-avatar color="info">
      {{ name[0].toUpperCase() }}
    </v-avatar>
  </slot>
</template>
