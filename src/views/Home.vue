<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Get some buzz?</h1>
        <Drinks :drinks="drinks" />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'
import Drinks from '../components/Drinks.vue'

const drinks = ref([])

onMounted(async () => {
    for (let i = 0; i < 6; i++) {

        const randomQueryParam = `?random=${Math.random()}`
        axiosClient
            .get(`random.php${randomQueryParam}`)
            .then(({data}) => drinks.value.push(data.drinks[0]))
    }
})

</script>
