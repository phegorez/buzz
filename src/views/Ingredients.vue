<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Ingredient Image</th>
                        <th>Ingredient Name</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="(ingredient, index) in ingredients" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img :src="imageSrc(ingredient.strIngredient1)"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ ingredient.strIngredient1 }}
                        </td>
                        <th>
                            <router-link :to="{name: 'byIngredients',params: { ingredients: ingredient.strIngredient1 }}" class="btn btn-ghost btn-xs">details</router-link>
                        </th>
                    </tr>
                </tbody>
                <!-- foot -->
                <tfoot>
                    <tr>
                        <th>Ingredient Image</th>
                        <th>Ingredient Name</th>
                        <th>#</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref('')
const ingredients = ref([])

const imageSrc = (ingredient) => {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`
}

onMounted(() => {
    axiosClient.get(`list.php?i=list`)
        .then(({ data }) => {
            ingredients.value = data.drinks
        })
})
</script>