<script setup>

</script>

<template>
    <div class="container flex flex-col  gap-8 ">
          <div class="flex gap-8 wrap justify-between">
            <v-card class="flex grow justify-center items-center px-6 py-4 text-center ">
                <v-card-title> 45 </v-card-title>
               <v-card-text>Active nodes</v-card-text>
               <v-card-actions>
               <v-btn to="/active-nodes">View</v-btn> 
               </v-card-actions>
            </v-card>

            <v-card class="flex justify-center grow items-center px-6 py-4 text-center ">
                <v-card-title> 13 </v-card-title>
               <v-card-text>Inactive nodes</v-card-text>
               <v-card-actions >
                
                <v-btn to="/inactive-nodes"> View</v-btn>
                   
               </v-card-actions>
            </v-card>
          </div>


          <div class="flex ">
            <v-card class="grow h-full">
                Graph area
            </v-card>

          </div>






    </div>
</template>