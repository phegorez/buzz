<template>
    <div class="card sm:w-75 lg:w-60 bg-base-100 h-full shadow-xl hover:scale-105 transition duration-150 ease-in-out">
        <router-link :to="{name: 'drinkDetails', params: {id: drink.idDrink}}">
            <figure><img :src="drink.strDrinkThumb" :alt="strDrink" class="object-cover rounded-t-md" /></figure>
        </router-link>
        <div class="card-body flex justify-between bg-white">
            <h4 class="card-title font-semibold">{{ drink.strDrink }}</h4>
            <p class="mb-4">{{ truncatedInstructions }}</p>
            <div class="card-actions justify-end">
                <router-link :to="{name: 'drinkDetails', params: {id: drink.idDrink}}" class="btn btn-outline btn-neutral">
                    Readmore
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {truncateWords} from '../filters'

    const truncatedInstructions = truncateWords(drink.strInstructions, 20)

    const {drink} = defineProps({
        drink: {
            required: true,
            type: Object
        }
    })
</script>
