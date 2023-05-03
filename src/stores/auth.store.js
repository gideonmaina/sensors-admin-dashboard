import { defineStore } from "pinia";
import axios from "axios"
import router from "@/router";
let auth_status=false
export const useAuthStore = defineStore("users", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    // user: "gmainapro@gmail.com",
    returnURL:null,
  }),
  actions: {
    async login(email, password) {
      try {

        // if(email!='gmainapro@gmail.com'&&password!='123456789'){
        //   return false
        // }

        const response=await axios.get(`${import.meta.env.VITE_API_URL}/users`)
        response.data.users.forEach(obj => {
          if(obj.email===email&&obj.password===password) {
            console.log("user found")
            this.user=obj.name;
            auth_status=true
            return;
          }
        });
       

        // localStorage.setItem("user", JSON.stringify(user));

       // redirect to previous url or default to home page
       if(!auth_status) return auth_status

       router.push(this.returnUrl || '/');

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
