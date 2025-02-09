import { defineStore } from "pinia";

type IModalInterface = {
  type: string;
  autoClose: boolean;
  duration: number;
    message: string;
};

export const useEvModalStore = defineStore("ModalStore", {
  state: () => ({
    modalActive: false,
    message: "",
    type: "",
    autoClose: false,
    duration: 0,
    isLoading:false 
  }),
    actions: {
        ToggleModalState() {
            this.isLoading = !this.isLoading;
      },
    createModal({ type, autoClose, duration,message }: IModalInterface) {
      this.modalActive = true;
      this.type = type;
      this.autoClose = autoClose;
      this.message = message;
      this.duration = duration;
      console.log("active");
    },

    closeModal() {
      this.modalActive = false;
      this.type = "";
      this.autoClose = true;
      this.duration = 0;
    },
  },
});
