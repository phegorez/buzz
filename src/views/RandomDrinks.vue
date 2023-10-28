<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Tell bartender, I want to drinks...</h1>
        <button class="btn" @click="random">Random</button>
        <div class="flex p-6 place-items-center z-0">
            <DrinkItems v-for="drink of drinks" :key="drink.idDrink" :drink="drink" />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '../axiosClient.js'
import DrinkItems from '../components/DrinkItems.vue'

const drinks = ref([])

const random = () => {

    if(drinks.value) {
        drinks.value = []
        axiosClient
        .get(`random.php`)
        .then(({data}) => drinks.value.push(data.drinks[0]))
    }
}

onMounted(async () => {
    for (let i = 0; i < 1; i++) {

        const randomQueryParam = `?random=${Math.random()}`
        axiosClient
            .get(`random.php${randomQueryParam}`)
            .then(({data}) => drinks.value.push(data.drinks[0]))
    }
})

</script>
