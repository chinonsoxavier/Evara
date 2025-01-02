<script setup>
import TextButton from '../../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../../components/CenterComponent.vue';
import ColumnStartComponent from '../../../../components/ColumnStartComponent.vue';
import IconComponent from '../../../../components/IconComponent.vue';
import ArrowsClockWiseDuoIcon from '../../../../components/icons/duo-tone/ArrowsClockWiseDuoIcon.vue';
import CreditCardDuoIcon from '../../../../components/icons/duo-tone/CreditCardDuoIcon.vue';
import CrownDuoIcon from '../../../../components/icons/duo-tone/CrownDuoIcon.vue';
import HeartIcon from '../../../../components/icons/duo-tone/HeartIcon.vue';
import ShoppingBagIcon from '../../../../components/icons/duo-tone/ShoppingBagIcon.vue';
import StartComponent from '../../../../components/StartComponent.vue';

</script>

<template>
  <ColumnStartComponent class="flex-1 gap-2  h-full">
    <ColumnStartComponent>
        <p class="text-3xl font-Heebo font-semibold">Henley Shirt</p>
        <p class="baseText font-Heebo">
            Brands: <span class="text-primary">adidas</span>
    </p>
    <StartComponent
      class="border-t font-Heebo border-b py-2 my-2 gap-4 border-gray-300"
    >
      <p class="text-[26px] font-Heebo text-primary font-bold">$114</p>
      <p class="line-through font-Heebo mediumText">$200</p>
      <p class="font-semibold mediumText font-Heebo">25% off</p>
    </StartComponent>
    <p class="mediumText font-Heebo">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea at quidem
      repellat veritatis non eveniet quam asperiores nostrum sapiente accusamus.
    </p>
    <ColumnStartComponent class="gap-3 mt-2">
      <StartComponent class="gap-3">
        <IconComponent class="w-5 h-5">
            <CrownDuoIcon class="w-5 h-5" />
        </IconComponent>
        <p class="smText font-Heebo">1 Year AL Brand Warranty</p>
    </StartComponent>
    <StartComponent class="gap-3">
        <IconComponent class="w-5 h-5">
            <ArrowsClockWiseDuoIcon class="w-5 h-5" />
        </IconComponent>
        <p class="smText font-Heebo">30 Days return policy</p>
    </StartComponent>
    <StartComponent class="gap-3">
        <IconComponent class="w-5 h-5">
            <CreditCardDuoIcon class="w-5 h-5" />
        </IconComponent>
        <p class="smText font-Heebo">Cash on delivery available</p>
    </StartComponent>
    <StartComponent class="gap-3">
        <p class="font-Heebo smallText">Color :</p>
        <StartComponent class="w-min gap-1">
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
            <IconComponent class="bg-[red] w-4 h-4"> </IconComponent>
        </StartComponent>
    </StartComponent>
    <StartComponent class="gap-3">
        <p class="font-Heebo smallText">Size :</p>
        <StartComponent class="w-min gap-1">
            <CenterComponent
            class="bg-primary duration-500 w-min cursor-pointer py-[px] px-2"
            >
            <p class="text-bold font-Heebo text-base text-white">
                M
            </p> </CenterComponent
            ><CenterComponent
            class="hover:bg-primary text-lightText border cursor-pointer border-primary hover:text-white duration-500 w-min py-[px] px-2"
            >
            <p class="text-bold font-Heebo text-base">M</p> </CenterComponent
            ><CenterComponent
            class="hover:bg-primary text-lightText hover:text-white border border-primary cursor-pointer duration-500 w-min py-[px] px-2"
            >
            <p class="text-bold font-Heebo text-base">M</p> </CenterComponent
            ><CenterComponent
            class="hover:bg-primary text-lightText hover:text-white border border-primary cursor-pointer duration-500 w-min py-[px] px-2"
            >
            <p class="text-bold font-Heebo text-base">M</p> </CenterComponent
            ><CenterComponent
            class="hover:bg-primary text-lightText hover:text-white border border-primary cursor-pointer duration-500 w-min py-[px] px-2"
            >
            <p class="text-bold font-Heebo text-base">M</p>
        </CenterComponent>
    </StartComponent>
</StartComponent>
<StartComponent class="gap-3">
    <TextButton
    class="hover:fill-primary duration-500 fill-white"
    theme="primary"
    text="ADD TO CART"
    :icon="ShoppingBagIcon"
    iconTheme="white"
    />
    <IconComponent
    class="border-primary group border rounded-sm hover:bg-primary fill-white hover:fill-primary duration-500"
    >
    <HeartIcon
    class="w-5 h-5 fill-crrent group-hover:fill-white fill-primary"
    />
</IconComponent>
</StartComponent>
</ColumnStartComponent>
</ColumnStartComponent>
<ColumnStartComponent class="mt-20 gap-1">
    <StartComponent class="smText gap-3">
        <p>SKU :</p>
        <p class="f font-normal" >DKJ99BH78</p>
    </StartComponent>
      <StartComponent class="smText gap-3">
        <p>Tags :</p>
        <p class="f font-normal" >Women,Clothes,Dress</p>
      </StartComponent>
      <StartComponent class="smText gap-3">
        <p>Availability :</p>
        <p class="font-normal" >8 items in stock</p>
      </StartComponent>
    </ColumnStartComponent>
  </ColumnStartComponent>
</template>
