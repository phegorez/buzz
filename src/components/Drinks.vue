<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 place-items-center z-0">
        <DrinkItems v-for="drink of drinks" :key="drink.idDrink" :drink="drink" />
    </div>
    <div v-if="!drinks.length" class="flex justify-center to-gray-600">
        No Drinks
    </div>
</template>
<script setup>
    import DrinkItems from './DrinkItems.vue'

    const {drinks} = defineProps({
        drinks : {
            required : true,
            type : Array,
            default : () => []
        }
    })

</script>
