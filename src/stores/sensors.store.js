import {defineStore} from "pinia"
import axios from "axios" 

export const useNodesStore =defineStore('Nodes',{

state:()=>{
    return {
        inactiveNodes:[]
    }
},

actions:{
    async getInactiveNodes(){
        try{
        console.log("getting inactive nodes")
        const inactiveNodes= await axios.get(`${import.meta.env.VITE_SENSORS_API}/v1/inactive-nodes`)
        this.inactiveNodes=inactiveNodes
        console.log(inactiveNodes)
        }
        catch(error){
            console.log(error.message)
        }
    }
}
}
)