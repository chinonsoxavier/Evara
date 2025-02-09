<script lang="ts" setup >
import { computed } from 'vue';
import EvModal from './EvModal.vue';
import { useEvModalStore } from './EvModalsStore';


const ModalStore = useEvModalStore();

// const modalType = ModalStore.type;
const modalActive = computed(()=>ModalStore.modalActive);

console.log(modalActive.value);
</script>

<template>
    <Transition>
        <section :class="[modalActive ? 'z-50' : '-z-50']" class="absolute overflow-hidden flex items-center duration-500 justify-center w-screen text-center text-white bg-[rgba(0,0,0,0.5)] inset-0" >
            <EvModal/>
        </section>
    </Transition>
</template>

