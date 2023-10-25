<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <!-- <input type="text" v-model="keyword" placeholder="Search for Ingredients"
            class="input input-bordered w-full mb-3 max-w-prose" /> -->
        <router-link :to="{
            name: 'byIngredients',
            params: { ingredients: ingredient.strIngredient1 }
        }" class="bg-white rounded p-5 mb-3 block" v-for="(ingredient, index) in ingredients" :key="index">
            <h3 class="text-2xl font-bold shadow mb-2">{{ ingredient.strIngredient1 }}</h3>
        </router-link>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref('')
const ingredients = ref([])

const computedIngredients = computed(() => {
    if (!ingredients.value) return ingredients
    return ingredients.value.filter((i) => i.strIngredient?.toLowerCase()?.includes(keyword.value.toLowerCase())
    )
})

onMounted(() => {
    axiosClient.get(`list.php?i=list`)
        .then(({ data }) => {
            ingredients.value = data.drinks
        })
})
</script>