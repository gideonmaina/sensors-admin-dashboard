import { defineStore } from "pinia";
import axios from "axios";

export const useNodesStore = defineStore("Nodes", {
  state: () => {
    return {
      inactiveNodes:[]
    };
  },
getters:{
    inactive_nodes_map(state){
        let map_data=JSON.parse(JSON.stringify(state.inactiveNodes))
        map_data=map_data.map(arr=>{return [arr[0],arr[8]] })
        return map_data
    }
},
  actions: {
    async getInactiveNodes() {
      try {
        console.log("getting inactive nodes");
        const response = await axios.get(
          `${import.meta.env.VITE_SENSORS_API}/v1/inactive-nodes/?format=json`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
    
        this.inactiveNodes = JSON.parse(JSON.stringify(response.data));
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
