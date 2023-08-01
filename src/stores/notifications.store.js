import { defineStore } from "pinia";
import axios from "axios";

export const useNotificationsStore = defineStore("notifications", {
  state: () => ({
    notifications: {},
  }),

  actions: {
    async getNotifications() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SENSORS_API}/notifications/`
        );
        this.notifications = response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
