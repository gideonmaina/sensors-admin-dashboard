import { defineStore } from "pinia";
import axios from "axios";

export const useNodesStore = defineStore("Nodes", {
  state: () => {
    let inactiveNodes=[]
    if (localStorage.getItem("inactiveNodes"))
      inactiveNodes=JSON.parse(localStorage.getItem("inactiveNodes"));
    return {
      inactiveNodes
    };
  },
getters:{

    inactive_nodes_map(state){
        let map_data=JSON.parse(JSON.stringify(state.inactiveNodes))
        map_data=map_data.map(arr=>{return [arr[0],arr[5],arr[8]] })
        return map_data
    },

    inactive_all(state){
      let inactive_nodes=JSON.parse(JSON.stringify(state.inactiveNodes))
      let nodes=[]
    
      inactive_nodes.forEach(arr=>{
        let node_struct={
          "node_id":null,
          "node_type":null,
          "last_active":null,
          "node_location":"",
          "node_city":"",
          "node_country":"",
          "node_sensors":[]
          
        }  
      node_struct.node_id=arr[0]
      node_struct.node_type=arr[3]
      node_struct.last_active=arr[2][0]
      node_struct.node_location=arr[5]
      node_struct.node_city=arr[6]
      node_struct.node_country=arr[7]
      node_struct.node_sensors=arr[1]

      nodes.push(node_struct)
       
      })

      console.log(nodes)
      return nodes
      
      
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
        
        this.inactiveNodes = response.data;
        localStorage.setItem("inactiveNodes", JSON.stringify(response.data));
        console.log("done getting inactive nodes")

      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
