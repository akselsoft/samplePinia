import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      currentForm: null,
    };
  },

  actions: {
    setCurrentForm(form) {
      this.currentForm = form;
    },
  },
});
