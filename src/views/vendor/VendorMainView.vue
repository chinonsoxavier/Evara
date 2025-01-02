 <script setup >
import VendorNavMenu from '../../components/nav-menus/VendorNavMenu.vue';
import VendorSideMenu from '../../components/nav-menus/VendorSideMenu.vue';

</script>

<template >
    <div class="flex items-start w-screen overflow-y-hidden h-screen" >
        <aside class="flex-1 min-w-[280px] max-w-[280px] h-screen" >
            <VendorSideMenu/>
        </aside>
        <section class="w flex-1 h-screen" >
            <nav class="flex w-full h-[10%] border-b-none border-b-lightText dark:border-b-darkPrimary" >
                <VendorNavMenu/>
            </nav>
            <div class="h-[90%] overflow-y-scroll w-full bg-[red]" >
                <RouterView/>
            </div>
        </section>
    </div>
</template>