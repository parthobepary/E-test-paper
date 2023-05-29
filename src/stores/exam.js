import { defineStore } from "pinia";

export const useCExamStore = defineStore("exam", {
  state: () => ({
    exam: ref({}),
  })
});