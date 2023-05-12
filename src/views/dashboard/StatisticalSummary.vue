<script setup>

</script>

<template>
  <div class="container flex flex-col  gap-8 ">
    <div class="flex gap-8 wrap justify-evenly">
      <v-card class="flex  justify-center items-center px-6 py-4 text-center w-56">
        <v-card-title class="text-purple-darken-3"> 
          45 
         <v-icon size="x-small" icon="mdi-trending-down">%</v-icon>
        </v-card-title>
        <v-card-text >Active nodes</v-card-text>
      
         
            <v-chip class="ma-2" color="success" variant="outlined" to="/active-nodes">view
              <v-icon end icon="mdi-arrow-top-right-thick"></v-icon>

            </v-chip>
       
      </v-card>

      <v-card class="flex justify-center items-center px-6 py-4 text-center  w-56">
        <v-card-title class="text-purple-darken-3"> 
          13
         <v-icon size="x-small" icon="mdi-trending-up">%</v-icon>
         </v-card-title>
        <v-card-text>Inactive nodes</v-card-text>
      

          <v-chip class="ma-2" color="success" variant="outlined" to="/inactive-nodes">view
              <v-icon end icon="mdi-arrow-top-right-thick"></v-icon>

            </v-chip>

        
      </v-card>
    </div>


    <div class="flex ">
      <v-card class="grow h-full">
        Graph area 
      </v-card>

    </div>






  </div>
</template>