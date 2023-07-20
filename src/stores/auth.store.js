import { defineStore } from "pinia";
import axios from "axios"
import router from "@/router";
let auth_status=false
export const useAuthStore = defineStore("users", {
  state: () => ({
    // user: JSON.parse(localStorage.getItem("user")),
    user: null,
    token: null,
    returnURL:null,
  }),
  actions: {
    async login(form_data) {
      try {
      
        const response=await axios.post(`${import.meta.env.VITE_SENSORS_API}/login/`,form_data)
        console.log(response)
        if(response.status != 200){
         auth_status = false
         return auth_status
        } 

        if(response.data.user.is_staff && response.data.user.is_active){
          this.user=response.data.user
          this.token=response.data.token
          auth_status=true;

          router.push(this.returnUrl || '/');
          return auth_status
        }


       // redirect to previous url or default to home page
       if(!auth_status) return auth_status


      } catch (error) {
        console.log(error.message);
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
