<script setup>

import {useRoute} from "vue-router"

const node_id=useRoute().params.node_id

</script>

<template>
    <h1>
        This is information for node id: <em><mark>{{ node_id }}</mark></em>
    </h1>
    <div class="monitoring">
     <h4>Data monitoring frame</h4>
    </div>
    <div>
        <ul>
            <li>Type: AQ sensor</li>
            <li>Location: Unamed Location</li>
            <li>Custodian: John Doe</li>
            <li>Last maintained date: 12/12/2012 </li>
            <li>Last maintained by: Jane, Doe</li>
            <li>Maintenance log:
                <p>
                Unreliable wifi <br>
                Components need to be replaced soon
                </p>
                </li>
                </ul>
    </div>
</template>

<style scoped>

.monitoring{
background-color: rgba(0,0,0,0.5);
width:96%;
min-height:200px;
margin:0 auto;
text-align: center;
}
</style>