import { defineStore } from 'pinia';
import { ref } from 'vue';

const useErrorStore = defineStore('error', () => {
  const errors = ref()

  return {
    errors,
  }
})

export default useErrorStore