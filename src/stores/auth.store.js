import { defineStore } from "pinia";

// import { router } from "@/router";
import { useRouter } from "vue-router"
const router=useRouter()
export const useAuthStore = defineStore("users", {
  state: () => ({
    // user: JSON.parse(localStorage.getItem("user")),
    user: "gmainapro@gmail.com",
    returnURL:null,
  }),
  actions: {
    async login(email, password) {
      try {
        this.user = email;
        console.log(email)
        console.log(password)
        // this.user=await fetchFunction()

        // this.user=user

        // localStorage.setItem("user", JSON.stringify(user));

        //redirection
        router.push( "/");
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
