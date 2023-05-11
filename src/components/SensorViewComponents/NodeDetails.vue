<template>
    
    <v-card>
        <div class="monitoring">
    
        <iframe
            src="https://grafana.aq.sensors.africa/d-solo/vYpoziaiz/sensors-africa-single-sensor-view?orgId=1&amp;panelId=2&amp;var-sensor_id=49"
              width="100%" height="100%" frameborder="0">
        </iframe>
        <span>Data in the last 24hrs</span>
    </div>
    <div>
        <v-card>
           <v-card-title>Overview</v-card-title>
            <ul>
                <li>Type: AQ sensor</li>
                <li>Location: Unamed Location</li>
                <li>Custodian: John Doe</li>
                <!-- <li>Last maintained date: 12/12/2012 </li>
                <li>Last maintained by: Jane, Doe</li>
                <li>Maintenance log:
                    <p>
                        Unreliable wifi <br>
                        Components need to be replaced soon
                    </p>
                </li> -->
            </ul>
        </v-card>
    </div>
</v-card>
</template>

<style scoped>
.monitoring {
    background-color: rgba(0, 0, 0, 0.5);
    width: 98%;
    height: 400px;
    margin: 0 auto;
    text-align: center;
}
</style>
