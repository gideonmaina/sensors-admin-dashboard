<script setup>

import { defineProps } from 'vue';


</script>


<template>
    <slot>
        <v-avatar color="info">
            <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
    </slot>
    
    <slot name="named-avatar">
        <v-avatar color="info">
            <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
    </slot>
</template>