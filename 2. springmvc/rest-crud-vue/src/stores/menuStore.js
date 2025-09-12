import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menus', () => {
  const activeUrl = ref("")

  const changeActive = (path)=>{
    activeUrl.value = path
  }

  return { activeUrl, changeActive }
})
