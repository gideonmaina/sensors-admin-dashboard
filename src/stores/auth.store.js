import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

let FetchResponse = {
  error: "",
};

export const useAuthStore = defineStore("users", {
  state: () => ({
    user: localStorage.getItem("user"!='undefined')?JSON.parse(localStorage.getItem("user")):null,
    token: localStorage.getItem("user"!='undefined')?JSON.parse(localStorage.getItem("user")):null,
    returnURL: null,
    auth_status: false,
  }),
  actions: {
    async login(form_data) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SENSORS_API}/login/`,
          form_data
        );

        console.log(response.status);

        if (response.data.user.is_staff && response.data.user.is_active) {
          this.user = response.data.user;
          this.token = response.data.token;
          this.auth_status = true;
           
          localStorage.setItem("user",JSON.stringify(response.data.user))
          localStorage.setItem("token",response.data.token)
          router.push(this.returnUrl || "/");
          return this.auth_status;
        } else {
          FetchResponse.error = "Sorry! Could not login 😔";
          return FetchError;
        }
      } catch (error) {
        console.log(error);

        switch (error.response.status) {
          case 500:
            FetchResponse.error = "Oops! Something is wrong on our side.";
            console.log(FetchResponse)
            return FetchResponse;

          case 404:
            FetchResponse.error = "Invalid credentials!";
            return FetchResponse;

          default:
            FetchResponse.error = "Sorry. Could not login 😔";
            return FetchResponse;
        }
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
