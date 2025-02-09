<script lang="ts" setup>
import { computed } from "vue";
import BetweenComponent from "../BetweenComponent.vue";
import EndComponent from "../EndComponent.vue";
import IconComponent from "../IconComponent.vue";
import CloseLineIcon from "../icons/line-icons/CloseLineIcon.vue";
import { useEvModalStore } from "./EvModalsStore";
import CenterComponent from "../CenterComponent.vue";
import EvLoader1 from "../../components/loaders/EvLoader1.vue";
import TextButton from "../buttons/TextButton.vue";
const ModalStore = useEvModalStore();

const modalMessage = computed(() => ModalStore.message);
const modalType = computed(() => ModalStore.type);
const modalActive = computed(() => ModalStore.modalActive);
const modalisLoading = computed(() => ModalStore.isLoading);

const deleteModal = () => {
  ModalStore.ToggleModalState();
  ModalStore.createModal({
    type: "delete-success",
    message: "",
    autoClose: false,
    duration: 0,
  });

  setTimeout(() => {
    ModalStore.ToggleModalState();
  }, 2000);
};

console.log(modalType.value);
console.log(modalMessage.value);
</script>

<template>
  <div
    :class="[modalActive ? 'scale-100' : 'scale-0']"
    class="bg-white duration-500 px-6 py-2 min-w-[500px] rounded"
  >
    <BetweenComponent class="relative">
      <p v-if="modalType == 'delete'" class="text-black text-xl font-medium">
        Delete Items
      </p>
      <div class="flex items-center justify-end flex-1">
        <IconComponent
          class="w-min absolue float-right right-0"
          @click="ModalStore.closeModal()"
        >
          <CloseLineIcon class="w-5 h-5" />
        </IconComponent>
      </div>
    </BetweenComponent>
    <CenterComponent class="py-8" v-if="modalisLoading">
      <EvLoader1 />
    </CenterComponent>

    <CenterComponent
      class="flex-col"
      v-if="modalType == 'delete-success' && !modalisLoading"
    >
      <IconComponent class="bg-[#FFA8B3] fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
          />
        </svg>
      </IconComponent>
      <p class="font-semibold pb-5 pt-3 text-black">Delete Successfully</p>
    </CenterComponent>
    <CenterComponent
      class="flex-col pb-3"
      v-if="modalType == 'success' && !modalisLoading"
    >
    
      <IconComponent class="bg-[#ECF2FF] fill-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="current"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
          />
        </svg>
      </IconComponent>
      <p class="font-semibold text-lg pt-2 pb-3 text-black">{{ modalMessage }}</p>
      <TextButton class="" text="Continue" theme="primary" />    
    </CenterComponent>
    
    <p
      v-if="modalType == 'delete' && !modalisLoading"
      class="text text-sm text-left my-3 font-medium text-darkText"
    >
      Are you sure you want to delete these item?
    </p>
    <EndComponent
      v-if="modalType == 'delete' && !modalisLoading"
      class="gap-2 pb-2 pt-5"
    >
      <button
        v-on:click="ModalStore.closeModal()"
        class="text-[#F0142F] font-medium px-5 py-[6px]"
      >
        Cancel
      </button>
      <button
        v-on:click="deleteModal"
        class="bg-[#F0142F] px-5 py-[6px] rounded"
      >
        Delete
      </button>
    </EndComponent>
  </div>
</template>
