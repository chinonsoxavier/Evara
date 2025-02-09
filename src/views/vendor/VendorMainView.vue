 <script setup lang="ts" >
import VendorNavMenu from '../../components/nav-menus/VendorNavMenu.vue';
import VendorSideMenu from '../../components/nav-menus/VendorSideMenu.vue';

</script>

<template >
    <div class="fle items-start w-screen overflow-y-hidden h-screen" >
        <div class="" >
            <VendorNavMenu/>
        </div>
        <div class="flex h-[90%] " >

            <aside class="flex-1 min-w-[270px] bg-[#1E2753] max-w-[280px] h-screen" >
                <VendorSideMenu/>
            </aside>
            <section class="w-full overflow-y-scroll bg-[#fff6f4]">
                <RouterView/>
            <!-- </div> -->
        </section>
    </div>
    </div>
</template>