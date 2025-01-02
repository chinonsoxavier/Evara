import { defineStore } from "pinia";


export const useMenuStore = defineStore("menu", {
    state: () => ({
        homeMenu:false
    }),
    actions: {
        ToggleHomeMenu() {
            this.homeMenu = !this.homeMenu
        }
    }
})