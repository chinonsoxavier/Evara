<script setup >
import EvComponent from './EvComponent.vue';
import FlexComponent from './FlexComponent.vue';
import ProductCardComponent from './ProductCardComponent.vue';

const data = [
    {
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },{
        category: "clothing",
        name: "Color Patter Shirts",
        rating: "14",
        oldPrice: "23344",
        newPrice:"122203"
    },
]

</script>

<template>
    <EvComponent>
        <FlexComponent class="flex-wrap gap-3">
            <ProductCardComponent
          v-for="(product,index) in data"
          :key="index"
          :category="product.category"
          :name="product.name"
          :rating="product.rating"
          :old-price="product.oldPrice"
          :new-price="product.newPrice"
          />
        </FlexComponent>
    </EvComponent>
</template>