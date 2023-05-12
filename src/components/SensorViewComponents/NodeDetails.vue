<template>
    <div>
        <div class="monitoring">

            <iframe
                src="https://grafana.aq.sensors.africa/d-solo/vYpoziaiz/sensors-africa-single-sensor-view?orgId=1&amp;panelId=2&amp;var-sensor_id=49"
                width="100%" height="100%" frameborder="0">
            </iframe>
            <span class="py-4">Data in the last 24hrs</span>
        </div>
        <div class="mt-24 mb-8 flex gap-8 wrap justify-evenly">
            <v-card class="w-56">
                <v-card-title>Overview</v-card-title>
                <v-card-text>
                    <ul class="leading-6">
                        <li>
                            <span>Type: </span>
                            <span>AQ sensor</span>
                        </li>
                        <li>
                            <span>Status: </span>
                            <span>Inactive</span>
                        </li>
                        <li>
                            <span>Location:</span>
                            <span>Unamed Location</span>
                        </li>
                        <li>
                            <span>Deployed on:</span>
                            <span>12/05/2023</span>
                        </li>
                        <li>Custodian:<span><router-link to="/custodians" class="font-weight-bold" text="John Doe">John
                                    Doe</router-link><v-icon icon="mdi-arrow-top-right-thick" size="x-small" color="info">
                                </v-icon></span></li>
                    </ul>

                </v-card-text>
            </v-card>

            <v-card class="w-56">
                <v-card-title>Sensors</v-card-title>
                <v-card-text>
                    <ul class="leading-6">
                        <li>
                            <span>PMS5003</span>
                            <span>id:43</span>
                        </li>
                        <li>
                            <span>DHT</span>
                            <span>id:44</span>
                        </li>
                        <li>
                            <span>SPH</span>
                            <span>id:45</span>
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<style scoped>
.monitoring {
    background-color: rgba(0, 0, 0, 0.5);
    width: 98%;
    height: 400px;
    margin: 0 auto;
    text-align: center;
}

ul li {
    display: flex;
    gap: 0.5rem
}
</style>
