<script setup>

const dates= [
      {
        color: 'cyan',
        date: '30/03/2023',
      },
      {
        color: 'green',
        date: '02/12/2022',
      },
      {
        color: 'pink',
        date: '9/06/2022',
      },
      {
        color: 'amber',
        date: '10/2/2022',
      },
      {
        color: 'orange',
        date: '04/07/2021',
      },
    ]

</script>


<template>

<v-timeline align="start">
        <v-timeline-item v-for="(date, i) in dates" :key="i" :dot-color="date.color" size="small">
            <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${date.color}`" v-text="date.date"></div>
            </template>
            <div>
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${date.color}`">
                    Lorem ipsum
                </h2>
                <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                    convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                    salutandi sententiae.
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>

</template>