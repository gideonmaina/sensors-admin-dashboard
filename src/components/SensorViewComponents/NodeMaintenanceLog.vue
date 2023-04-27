<script setup>
import logs from "../../simulationdata/maintenancelog.json"

import Avatar from "../avators/BaseAvator.vue"



const logStatus=bool=>bool?"Resolved ✅":"Unresolved 🚨"
</script>


<template>

<v-timeline align="start">
        <v-timeline-item v-for="(log, i) in logs" :key="i" :dot-color="log.color" size="small">
            <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${log.color}`" v-text="log.date"></div>
            </template>
            <div>
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${log.color}`">
                    {{logStatus(log.resolved)}}
                </h2>
                <div>
                  <p>{{ log.report }}</p><br>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                    convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                    salutandi sententiae.
                </div>

                <div class="personnel">
                  <p>Maintained By:</p>
                  <span v-for="staff in log.attention" :key="staff">
                    <Avatar :name="staff">
                    <template v-slot:named-avatar >
                   
                    </template>
                    </Avatar>
                  </span>
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>

</template>

<style scoped>

.personnel{
  margin:4px 0;
}
.personnel span{
  font-weight: 600;
  margin-right: 2px;
 
}
</style>