<script setup>
import logs from "../../simulationdata/maintenancelog.json";

import Avatar from "../avators/BaseAvator.vue";

const logStatus = (bool) => (bool ? "Resolved ✅" : "Unresolved 🚨");
</script>

<template>
  <div class="px-4">
    <v-timeline align="center" >
      <v-timeline-item v-for="(log, i) in logs" :key="i" :dot-color="log.color" size="small">
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold underline underline-offset-4 text-${log.color}`" v-text="log.date">
          </div>
        </template>
        <v-card class="px-2 py-4">
          <h2 :class="`mt-n1 headline font-weight-bold mb-4 text-${log.color}`">
            {{ logStatus(log.resolved) }}
          </h2>
          <div class="my-4">
            <h6>{{ log.report }}</h6>
            <p class="mt-4">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>Maintained By:</p>

            <div class="flex gap-2">
              <span v-for="staff in log.attention" :key="staff">
                <Avatar :name="staff">
                  <template v-slot:named-avatar> </template>
                </Avatar>
              </span>
            </div>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
